# 1주차 미션: 캡슐화된 상태 저장소(Store) 모듈 구현 설명

이 문서는 1주차 미션의 핵심 자바스크립트 개념인 **클로저(Closure)**와 **실행 컨텍스트(Execution Context)**, 그리고 이를 활용한 **발행-구독(Pub/Sub) 상태 관리 패턴**에 대해 설명합니다.

---

## 1. 클로저(Closure)를 활용한 상태 은닉화

자바스크립트 객체의 프로퍼티는 기본적으로 외부에 노출되어 있어 직접적인 재할당이나 수정이 가능합니다. 미션의 목표는 외부에서 상태를 직접 변경하지 못하도록 제한하고, 오직 지정된 인터페이스를 통해서만 조회 및 수정할 수 있게 은닉화(Encapsulation)하는 것입니다.

* **동작 원리**:
  `createStore` 함수 내부에 선언된 로컬 변수 `state`와 `listeners`는 외부에서 직접 접근할 수 없습니다. 대신 `createStore`가 반환하는 내부 메서드(`getState`, `setState`, `subscribe`)가 선언될 당시의 환경(렉시컬 환경)을 기억하고 참조합니다.
* **메모리 유지**:
  외부 함수(`createStore`)의 실행이 종료된 후에도 반환된 세 가지 함수가 외부 변수를 계속 참조하고 있기 때문에, 가비지 컬렉터(GC)에 의해 해당 메모리가 해제되지 않고 유지됩니다.

---

## 2. 실행 컨텍스트(Execution Context) 관점에서의 동작 흐름

1. **`createStore` 호출**:
   * 새로운 실행 컨텍스트가 생성되어 콜 스택(Call Stack)에 쌓입니다.
   * `createStore` 컨텍스트 내부의 **렉시컬 환경(Lexical Environment)**에 `state`와 `listeners` 변수가 기록됩니다.
2. **함수 종료 및 반환**:
   * 세 가지 메서드를 지닌 객체를 반환하고, `createStore` 실행 컨텍스트는 콜 스택에서 팝(Pop)되어 제거됩니다.
3. **참조 상태 유지**:
   * 반환된 내부 함수들의 `[[Environment]]` 내부 슬롯이 `createStore` 실행 컨텍스트가 참조하던 렉시컬 환경을 여전히 가리키고 있습니다.
   * 이에 따라 외부 함수가 콜 스택에서 제거된 후에도 `state`와 `listeners` 메모리 공간이 안전하게 유지됩니다.

---

## 3. 전체 구현 로직 및 분석

아래는 클로저와 불변성, 그리고 효율적인 구독(Pub/Sub) 구조를 충족하는 완성된 스토어 모듈의 전체 코드와 상세 분석입니다.

### 전체 코드 (`mission.js`)

```javascript
export function createStore(initialState = {}) {
  // 1. 외부 접근이 차단된 은닉화 변수들
  let state = { ...initialState };
  let listeners = [];

  // 2. 현재 상태 조회 (불변성을 위한 얕은 복사 반환)
  function getState() {
    return { ...state };
  }

  // 3. 상태 수정 및 구독 전파
  function setState(newState) {
    let hasChanged = false;

    // 얕은 비교를 수행해 실제 프로퍼티의 값 변화를 감지
    for (const key in newState) {
      if (state[key] !== newState[key]) {
        hasChanged = true;
        break;
      }
    }

    // 변경 사항이 있을 때만 병합 수행 및 알림 전송 (최적화)
    if (hasChanged) {
      state = { ...state, ...newState };

      const updatedState = { ...state };
      listeners.forEach((listener) => listener(updatedState));
    }
  }

  // 4. 리스너 구독 및 구독 취소 함수 반환
  function subscribe(listener) {
    if (typeof listener === "function" && !listeners.includes(listener)) {
      listeners.push(listener);
    }

    // 구독 취소를 위한 함수 반환 (클로저)
    return function unsubscribe() {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return {
    getState,
    setState,
    subscribe,
  };
}
```

### 각 메서드 로직 상세 설명

#### 1) `getState()`
* `state` 객체의 원본 참조값을 그대로 넘겨주면, 외부에서 이를 가져가 직접 조작하는 상황이 발생할 수 있습니다.
* `{ ...state }` 형태로 새로운 객체에 담아 반환함으로써 **참조 격리 및 불변성**을 보장합니다.

#### 2) `setState(newState)`
* `newState` 내의 필드들을 기존 `state`와 하나씩 비교(얕은 비교)하여 값이 변경된 경우에만 새로운 병합 객체(`state = { ...state, ...newState }`)를 생성합니다.
* **가장 중요한 포인트**: `listeners.forEach(...)` 알림 전송은 반드시 `if (hasChanged)` 블록 **안쪽**에서 실행되어야 합니다. 데이터에 실질적인 변화가 없음에도 매번 리스너를 호출하게 되면, 해당 스토어를 사용하는 뷰(UI) 레이어에서 불필요한 재렌더링이 대량 발생하여 프레임 드랍 등 성능 저하를 초래합니다.

#### 3) `subscribe(listener)`
* 상태 변화를 실시간으로 받고자 하는 함수를 `listeners` 배열에 안전하게 등록합니다.
* 실행 후 자신을 해제할 수 있는 `unsubscribe` 함수를 반환합니다. 이 함수 역시 내부 리스너 배열을 다루기 위해 외부 스코프의 `listeners` 변수와 매개변수 `listener`에 접근해야 하므로 또 하나의 **클로저(Closure)**를 형성합니다.

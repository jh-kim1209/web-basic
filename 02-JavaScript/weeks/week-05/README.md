# 5주차: JS 엔진 깊이 읽기 및 메모리 최적화

## 📖 핵심 요약
자바스크립트가 브라우저나 Node.js 환경에서 작동할 때 기저에 깔려 있는 **V8 엔진**의 구조와 실행 최적화 파이프라인을 학습합니다. 또한 비동기 루프를 조율하는 **이벤트 루프(Event Loop)**와 효율적인 메모리 사용을 위한 **가비지 컬렉션(Garbage Collection)** 원리를 배웁니다.

*   **V8 엔진 파이프라인**: 자바스크립트 코드는 파서(Parser)를 거쳐 AST를 생성하고, 인터프리터(Ignition)가 바이트코드를 실행하며, 자주 호출되는 뜨거운(Hot) 코드는 컴파일러(TurboFan)가 네이티브 기계어로 최적화 컴파일합니다.
*   **태스크 큐 우선순위**:
    *   **매크로태스크 (Macrotask) 큐**: `setTimeout`, `setInterval`, `setImmediate`, I/O 작업.
    *   **마이크로태스크 (Microtask) 큐**: `Promise.then`, `queueMicrotask`, `MutationObserver`.
    *   *이벤트 루프는 매 매크로태스크를 처리하기 전, 대기 중인 모든 마이크로태스크 큐를 완전히 비워야 합니다.*
*   **메모리 누수 (Memory Leak)**: 해제되지 않는 전역 변수, 클리어하지 않은 타이머, 해제하지 않은 DOM 이벤트 리스너 등으로 인해 가비지 컬렉터가 메모리를 해제하지 못하는 현상입니다.

## 🎯 학습 목표
1.  매크로태스크와 마이크로태스크의 실행 우선순위를 예측하여 실행 순서를 테스트 코드로 검증할 수 있다.
2.  가비지 컬렉터(GC)의 세대별 수집 메커니즘과 Mark-and-Sweep 방식을 설명할 수 있다.
3.  코드 내에 잠재된 메모리 누수 요인(타이머, 리스너)을 식별하고 코드를 리팩토링할 수 있다.

## 🧪 5주차 미션: 이벤트 리스너 및 타이머 메모리 누수 해결 모듈 구현
*   **미션 파일**: `mission.js`
*   **요구 사항**:
    1.  `LeakyEmitter` 클래스는 이벤트를 구독받는 객체이지만, 해제 처리를 누락하면 이전 리스너들이 메모리에 누적되는 누수가 발생합니다.
    2.  이벤트 리스너를 안전하게 관리할 수 있도록, 이벤트 등록 시 이를 자동으로 트래킹하여 한 번에 해제(Clean-up)할 수 있는 `SafeRegistry` 클래스를 구현합니다.
    3.  `SafeRegistry`는 `registerListener(target, event, handler)`로 리스너를 매핑하고, `clearAll()` 메서드가 호출되면 등록된 모든 리스너를 `removeEventListener`를 통해 완벽히 가비지 컬렉션(GC) 대상이 될 수 있게 해제해야 합니다.

## 📚 추천 참고서
*   *JavaScript in Depth (James M. Snell)* - Chapter 2 & 4
*   MDN Web Docs - Memory Management & Event Loop

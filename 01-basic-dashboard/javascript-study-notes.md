# JavaScript 학습 노트

> 학습일: 2026-06-24 ~ 2026-06-28  
> 프로젝트: `web-basic` (Todo List, 실시간 시계, 이름 입력 앱 구현을 통한 실습)

---

## 목차

| 챕터 | 주제 | 학습 단계 |
|------|------|-----------|
| [Ch.1](#ch1-변수-선언) | 변수 선언, 기본 자료형 및 `typeof` 연산자 | 기초 |
| [Ch.2](#ch2-연산자) | 연산자, 조건문(`if`/`switch`), Truthy & Falsy | 기초 |
| [Ch.3](#ch3-함수) | 함수: 선언식 vs 화살표 함수 | 기초 |
| [Ch.4](#ch4-객체-object) | 객체(Object)와 단축 속성 | 기초 |
| [Ch.5](#ch5-배열-array과-반복) | 배열(Array)과 다양한 반복문(`for`, `for...of`, `while`) | 기초 |
| [Ch.6](#ch6-배열-고차-함수) | 배열 고차 함수: `filter` / `map` / `findIndex` / `join` | 중급 |
| [Ch.7](#ch7-템플릿-리터럴) | 템플릿 리터럴 | 중급 |
| [Ch.8](#ch8-dom-조작) | DOM 조작: 요소 선택 및 `hidden` 속성 | 중급 |
| [Ch.9](#ch9-이벤트-처리) | 이벤트 처리: `onclick` vs `addEventListener` | 중급 |
| [Ch.10](#ch10-비동기-처리-async--await) | 비동기 처리: `async` / `await` / `fetch` | 심화 |
| [Ch.11](#ch11-날짜와-타이머-date--setinterval) | 날짜와 타이머: `Date`와 `setInterval` | 중급 |
| [Ch.12](#ch12-실습-웹-앱-구현) | 실습: Todo List, 실시간 시계, 이름 입력 앱 | 실습 |
| [Ch.13](#ch13-디버깅-포인트) | 디버깅 포인트 | 참고 |
| [Ch.14](#ch14-옵셔널-체이닝과-널-병합-연산자) | 옵셔널 체이닝(`?.`) 및 널 병합 연산자(`??`) | 중급 |

---

## Ch.1 변수 선언

### var / let / const 비교

```javascript
// ❌ 옛날 방식 (사용 지양)
var name = "김재현";

// ✅ ES6 방식
let count = 0;       // 값이 바뀌는 변수
const MAX = 100;     // 값이 절대 안 바뀌는 상수
```

| 구분 | `var` | `let` | `const` |
|------|-------|-------|---------|
| 재선언 | ✅ 가능 | ❌ 불가 | ❌ 불가 |
| 재할당 | ✅ 가능 | ✅ 가능 | ❌ 불가 |
| 스코프 | 함수(function) | 블록(`{}`) | 블록(`{}`) |

> 💡 **기본 규칙**: 기본은 `const`, 값이 바뀌어야 하면 `let`, `var`는 쓰지 않는다!

### 블록 스코프란?

```javascript
// var는 블록 밖에서도 접근 가능 (위험)
if (true) {
    var x = 10;
}
console.log(x); // 10 ← 블록 밖인데도 접근됨!

// let / const는 블록 안에서만 유효 (안전)
if (true) {
    let y = 20;
}
console.log(y); // ReferenceError: y is not defined
```

### 기본 자료형 (Primitive Types) vs 참조 자료형 (Reference Types)

JavaScript의 값은 저장 방식과 성격에 따라 두 그룹으로 분류됩니다.

1. **기본 자료형 (값 자체가 복사되어 저장됨)**:
   - `String` (문자열): `"안녕"`, `'hello'`
   - `Number` (숫자): `100`, `3.14` (정수와 실수 구분 없이 모두 Number)
   - `Boolean` (논리형): `true`, `false`
   - `Null` (의도적으로 비어있음을 명시): `null`
   - `Undefined` (변수 선언 후 값이 아직 할당되지 않은 기본값): `undefined`

2. **참조 자료형 (메모리 주소값이 저장됨)**:
   - `Object` (객체), `Array` (배열), `Function` (함수)

### typeof 연산자
변수나 값의 데이터 타입을 문자열로 반환하는 연산자입니다.

```javascript
typeof "안녕"     // "string"
typeof 123        // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object"  ← (JS 초기 설계의 역사적 오류로 유명함)
typeof { id: 1 }  // "object"
typeof [1, 2, 3]  // "object"  ← 배열도 객체(Object)의 한 종류입니다.
typeof (() => {}) // "function"
```

---

## Ch.2 연산자

### 비교 연산자

```javascript
// == : 값만 비교 (타입 자동 변환)
"1" == 1   // true ← 위험!

// === : 값 + 타입 모두 비교 (권장)
"1" === 1  // false
1 === 1    // true
```

> 💡 **규칙**: 항상 `===`를 사용하자! `==`는 예상치 못한 버그를 만든다.

### 논리 연산자

```javascript
true && true   // true  (AND: 둘 다 참)
true || false  // true  (OR: 하나라도 참)
!true          // false (NOT: 반전)
```

### 삼항 연산자 (Ternary Operator)

`if/else`를 한 줄로 표현하는 문법.

```javascript
// 조건 ? 참일 때 값 : 거짓일 때 값
const result = true ? "완료" : "미완료";  // "완료"

// 실제 활용: done 상태에 따라 스타일 적용
const style = done ? "text-decoration: line-through;" : "";
const checked = done ? "checked" : "";
```

### 조건문 (if / else if / else 및 switch)

1. **if / else if / else**: 조건식의 불리언 값에 따라 실행할 코드 블록을 제어합니다.
```javascript
const score = 85;

if (score >= 90) {
    console.log("A 등급");
} else if (score >= 80) {
    console.log("B 등급"); // 참이므로 실행됨
} else {
    console.log("C 등급");
}
```

2. **switch**: 단일 변수나 표현식의 여러 값 분기에 사용합니다. `break`를 작성하지 않으면 매칭되는 이후의 모든 case가 실행되는 "fall-through" 현상이 발생하므로 꼭 넣어주어야 합니다.
```javascript
const userRole = "admin";

switch (userRole) {
    case "user":
        console.log("일반 사용자");
        break;
    case "admin":
        console.log("관리자 권한"); // 실행됨
        break;
    default:
        console.log("비회원");
}
```

### Truthy & Falsy (참 같은 값 & 거짓 같은 값)

JavaScript는 조건문(`if`) 안의 조건이 불리언 타입(`true`/`false`)이 아니어도, 내부적으로 자동 형변환하여 평가합니다.

1. **Falsy (거짓 같은 값 - 딱 6가지만 암기!)**:
   - `false`
   - `0` (숫자 영)
   - `""` (빈 문자열)
   - `null` (의도적 빈 값)
   - `undefined` (값 할당 없음)
   - `NaN` (숫자가 아님 - Not a Number)

2. **Truthy (참 같은 값)**:
   - 위 6가지 Falsy 값을 제외한 모든 것.
   - 빈 배열(`[]`), 빈 객체(`{}`)도 **Truthy**에 해당합니다.

```javascript
// 활용 예시: 유효성 검사 (입력값이 빈 값, null, undefined인지 한 번에 체크)
function printTodo(text) {
    if (text) { // text가 null, undefined, ""(빈문자)라면 Falsy로 판단해 실행되지 않음
        console.log(`할일: ${text}`);
    }
}
```

---

## Ch.3 함수

### 함수 선언식 vs 함수 표현식

```javascript
// 함수 선언식 (hoisting 가능 - 선언 전에 호출 가능)
function greet(name) {
    return `안녕, ${name}!`;
}

// 함수 표현식 (변수에 함수를 담는 방식)
const greet = function(name) {
    return `안녕, ${name}!`;
};
```

### 화살표 함수 (Arrow Function) — ES6

```javascript
// 기본형
const add = (a, b) => {
    return a + b;
};

// 축약형: 한 줄이면 return과 {} 생략 가능
const add = (a, b) => a + b;

// 파라미터가 1개면 () 생략 가능
const double = x => x * 2;

// 파라미터가 없으면 () 필수
const sayHi = () => "안녕!";
```

### 화살표 함수 활용 패턴

```javascript
// 배열 메서드 안에서 자주 사용됨
todoList.filter(item => item.done === false);
todoList.map(item => `<li>${item.text}</li>`);
todoList.findIndex(item => item.id === id);
```

---

## Ch.4 객체 (Object)

### 객체 기본 문법

```javascript
// 객체 생성
const todo = {
    id: 1,
    text: "공부하기",
    done: false
};

// 속성 접근
console.log(todo.id);    // 1
console.log(todo.text);  // "공부하기"

// 속성 수정
todo.done = true;
```

### 단축 속성 (Shorthand Property) — ES6

키 이름과 변수명이 같을 때 생략 가능.

```javascript
const text = "공부하기";
const done = false;

// ❌ 기존 방식
const todo = { text: text, done: done };

// ✅ 단축 속성
const todo = { text, done };
```

### 실제 코드 활용

```javascript
todoList.push({
    id: todoId,
    text,       // text: text 를 단축 표기
    done: false
});
```

---

## Ch.5 배열 (Array)과 반복

### 배열 기본 문법

```javascript
const fruits = ["사과", "바나나", "딸기"];

// 인덱스로 접근 (0부터 시작)
console.log(fruits[0]); // "사과"

// 길이
console.log(fruits.length); // 3

// 요소 추가 (맨 뒤)
fruits.push("포도");

// 특정 위치 요소 제거
fruits.splice(1, 1); // 인덱스 1부터 1개 제거
```

### for 루프 vs 배열 메서드

```javascript
// ❌ 전통적인 for 루프 (인덱스 직접 관리)
for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === id) {
        todoList[i].done = !todoList[i].done;
        break; // 잊으면 버그!
    }
}

// ✅ 배열 고차 함수로 대체 가능 (더 간결하고 안전)
const index = todoList.findIndex(item => item.id === id);
```

### 다양한 반복문 (for...of, while)

1. **for...of**: 배열의 모든 요소를 순차적으로 돌며 값을 꺼내 쓸 때 가장 간결하고 가독성이 높은 최신 반복문입니다.
```javascript
const fruits = ["사과", "바나나", "딸기"];

for (const fruit of fruits) {
    console.log(fruit); // 사과 -> 바나나 -> 딸기 순서대로 바로 접근 가능
}
```

2. **while**: 조건이 참(`true`)인 동안 코드 블록을 계속 반복 실행합니다. 반복 횟수가 동적이거나 조건을 수동으로 제어해야 할 때 적합합니다.
```javascript
let count = 0;

while (count < 3) {
    console.log(count); // 0 -> 1 -> 2
    count++; // ⚠️ 무한 루프 방지를 위해 조건 탈출 코드(증감 연산자 등) 필수!
}
```

---

## Ch.6 배열 고차 함수

> 배열의 각 요소에 **함수를 전달**해서 동작하는 메서드들.  
> 화살표 함수와 함께 사용하면 매우 간결해진다.

### `filter()` — 조건에 맞는 요소만 추출

원본 배열을 변경하지 않고 **새 배열** 반환.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// Todo 삭제: 해당 id가 아닌 것들만 남김
todoList = todoList.filter(item => item.id !== id);
```

### `map()` — 배열의 모든 요소를 변환

각 요소에 함수를 적용한 **새 배열** 반환.

```javascript
const fruits = ["사과", "바나나"];

const listItems = fruits.map(fruit => `<li>${fruit}</li>`);
// ["<li>사과</li>", "<li>바나나</li>"]  ← 여전히 배열!
```

> ⚠️ `map()`의 결과는 **배열**이다. `innerHTML`에 바로 넣으면 쉼표가 생긴다!

### `join()` — 배열 → 문자열 변환

```javascript
["<li>사과</li>", "<li>바나나</li>"].join("")
// "<li>사과</li><li>바나나</li>"  ← 쉼표 없는 문자열!

// join(",")  → "사과,바나나"
// join(" | ") → "사과 | 바나나"
```

> 💡 **map() + join("") 패턴**: 배열을 HTML 문자열로 만드는 가장 흔한 패턴!

### `findIndex()` — 조건에 맞는 요소의 인덱스 반환

```javascript
const todos = [
    { id: 1, text: "공부" },
    { id: 2, text: "운동" }
];

const index = todos.findIndex(item => item.id === 2);
// id가 2인 요소의 인덱스 → 1

// 못 찾으면 -1 반환
const notFound = todos.findIndex(item => item.id === 99);
// -1

// 활용: 찾은 인덱스로 원본 배열 수정
if (index !== -1) {
    todos[index].done = !todos[index].done;
}
```

### 배열 고차 함수 비교 정리

| 메서드 | 목적 | 반환값 |
|--------|------|--------|
| `filter()` | 조건에 맞는 것만 걸러냄 | 새 배열 |
| `map()` | 모든 요소를 변환 | 새 배열 |
| `findIndex()` | 조건에 맞는 요소 위치 탐색 | 숫자 (인덱스 or -1) |
| `join()` | 배열을 하나의 문자열로 합침 | 문자열 |

---

## Ch.7 템플릿 리터럴

백틱(`` ` ``)을 사용해 문자열 안에 변수/표현식을 삽입하는 ES6 문법.

### 기본 사용법

```javascript
const name = "김재현";
const score = 100;

// ❌ 옛날 방식 (문자열 이어붙이기)
console.log("이름: " + name + ", 점수: " + score + "점");

// ✅ 템플릿 리터럴
console.log(`이름: ${name}, 점수: ${score}점`);
```

### 여러 줄 HTML 작성

```javascript
const html = `
    <li>
        <span>${name}</span>
        <span>${score}점</span>
    </li>
`;
```

### 표현식 삽입 (`${}` 안에 JS 코드 가능)

```javascript
const done = true;

// 삼항 연산자 활용
`<input type="checkbox" ${done ? 'checked' : ''}>`
// → <input type="checkbox" checked>

`<span style="${done ? 'text-decoration: line-through;' : ''}">`
// → <span style="text-decoration: line-through;">

// 함수 호출도 가능
`<button onclick="deleteTodo(${todoItem.id})">삭제</button>`
```

---

## Ch.8 DOM 조작

> DOM(Document Object Model): HTML 문서를 JavaScript로 다루기 위한 구조.

### 요소 선택

```javascript
// ID로 요소 선택 (가장 기본)
const el = document.getElementById('todoList');

// CSS 선택자로 선택
const el = document.querySelector('.myClass');
```

### innerHTML vs innerText

```javascript
// innerHTML: HTML 태그를 포함한 문자열로 DOM 업데이트
document.getElementById('todoList').innerHTML = "<li>항목</li>";

// innerText: 순수 텍스트만 변경 (태그는 그냥 문자로 처리됨)
document.getElementById('nameLabel').innerText = "안녕, 김재현!";
```

> ⚠️ **주의**: `innerText`로 부모 요소를 덮으면 자식 DOM도 같이 사라진다!  
> → 텍스트만 변경할 때는 별도 `<span>`으로 분리해서 사용할 것.

```html
<!-- ❌ label 안에 input이 있는 경우 innerText로 덮으면 input 사라짐 -->
<label id="nameLabel">
    너의 이름은?
    <input type="text" id="name" />
</label>

<!-- ✅ span을 분리해서 텍스트만 따로 관리 -->
<label>
    <span id="nameLabel">너의 이름은?</span>
    <input type="text" id="name" />
</label>
```

### hidden 속성 제어 (요소 숨기기 / 보이기)

HTML 요소를 화면에서 숨기거나 표시할 때 사용합니다. CSS의 `display: none`과 같은 효과를 냅니다.

```javascript
const nameInput = document.getElementById("nameInput");

// 요소 숨기기
nameInput.hidden = true;

// 요소 다시 표시하기
nameInput.hidden = false;
```

### 기타 DOM 메서드 및 속성

```javascript
// 포커스 이동
document.getElementById('todotext').focus();

// input 값 읽기 / 초기화 / 설정
const value = document.getElementById('todotext').value;
document.getElementById('todotext').value = ""; // 값 비우기
document.getElementById('nameInput').value = "김재현"; // 값 대입
```

---

## Ch.9 이벤트 처리

### 인라인 onclick (기본)

HTML 태그 안에 직접 이벤트 함수를 연결하는 방식.

```html
<button type="button" onclick="addTodo()">추가</button>
```

> ⚠️ `<form>` 안의 버튼은 기본값이 `type="submit"` → 클릭 시 페이지 새로고침!  
> 반드시 `type="button"`으로 명시해야 함.

```html
<!-- ❌ 페이지가 새로고침됨 -->
<button type="submit" onclick="addTodo()">추가</button>

<!-- ✅ 새로고침 없이 함수 실행 -->
<button type="button" onclick="addTodo()">추가</button>
```

### addEventListener 사용 (권장)

HTML과 JavaScript 코드를 분리하고, 하나의 요소에 다수의 이벤트 핸들러를 등록할 수 있어 더 현대적이고 유연한 방식입니다.

```javascript
const submitButton = document.getElementById("submitNameButton");
const nameInput = document.getElementById("nameInput");

// 클릭 이벤트 리스너 등록
submitButton.addEventListener("click", () => {
    setName(nameInput.value);
});
```

### 템플릿 리터럴에서 동적 이벤트 연결

동적으로 생성하는 HTML에 `onclick`을 삽입하는 패턴.

```javascript
// ${}로 각 항목의 id를 함수 인자로 전달
const html = todoList.map(todoItem => `
    <input type="checkbox" onclick="toggleTodoDone(${todoItem.id})">
    <button onclick="deleteTodo(${todoItem.id})">삭제</button>
`).join("");
```

---

## Ch.10 비동기 처리: async / await

### 동기 vs 비동기

```javascript
// 동기: 위에서 아래로 순서대로 실행
console.log("1");
console.log("2"); // 1이 끝난 뒤 실행
console.log("3");

// 비동기: 기다리는 동안 다음 코드 실행
console.log("1");
fetch("https://api.example.com/data"); // 기다리지 않고 다음으로 넘어감
console.log("3"); // fetch가 끝나기 전에 실행될 수도 있음!
```

### async / await — 비동기를 동기처럼 작성

```javascript
// async: 이 함수는 비동기 함수다
async function getData() {
    // await: 이 작업이 끝날 때까지 기다려라
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();  // JSON으로 변환도 비동기
    console.log(data);
}
```

### fetch API

외부 서버에 HTTP 요청을 보내는 내장 함수.

```javascript
async function getWeather() {
    const response = await fetch("https://api.openweathermap.org/...");
    const data = await response.json();

    console.log(data.name);                     // "Seoul"
    console.log(data.main.temp);                // 기온 (℃)
    console.log(data.weather[0].description);   // "맑음"
}
```

### try / catch / finally — 에러 처리

```javascript
async function fetchData() {
    try {
        // 성공할 것으로 기대하는 코드
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // 실패했을 때 처리
        console.error("에러 발생:", error);
    } finally {
        // 성공/실패 관계없이 항상 실행
        console.log("요청 완료");
    }
}
```

---

## Ch.11 날짜와 타이머 (Date & setInterval)

### Date 객체
현재 날짜와 시간을 다루는 내장 객체입니다.

```javascript
const date = new Date();

let hours = date.getHours();     // 시 (0~23)
let minutes = date.getMinutes(); // 분 (0~59)
let seconds = date.getSeconds(); // 초 (0~59)
```

### setInterval
지정된 시간 간격(밀리초, ms)마다 제공된 콜백 함수를 반복 실행합니다.

```javascript
// 1초(1000ms)마다 updateClock 함수를 실행
setInterval(updateClock, 1000);
```

### 시간 값 포맷팅 테크닉
1. **2자리 숫자로 맞추기 (Ternary Operator 활용)**:
   ```javascript
   const pad = time => time < 10 ? '0' + time : time;
   ```
2. **12시간제 변환 및 기본값 설정 (OR 연산자 `||` 활용)**:
   ```javascript
   // hours % 12 결과가 0(오전/오후 12시)인 경우 12로 출력
   const displayHours = hours % 12 || 12;
   ```

---

## Ch.12 실습: 웹 앱 구현

### 1. Todo List 앱 ([todo.html](./todo.html))
- **적용 개념**: `push()`, 객체 단축 속성, `map()`, `join()`, 템플릿 리터럴, `innerHTML`, `findIndex()`, `filter()`

```javascript
let todoId = 1;
let todoList = [];

// Todo 추가
function addTodo(text) {
    if (text === null || text === "") {
        alert("할일을 입력해주세요.");
        document.getElementById('todotext').focus();
        return;
    }

    todoList.push({
        id: todoId,
        text,         // 단축 속성 (text: text)
        done: false
    });

    todoId++;
    document.getElementById('todotext').value = "";
    document.getElementById('todotext').focus();
    renderTodoList();
}

// 화면 렌더링 (map + join + 템플릿 리터럴)
function renderTodoList() {
    document.getElementById('todoList').innerHTML = todoList.map(todoItem => `
        <li>
            <input type="checkbox"
                onclick="toggleTodoDone(${todoItem.id})"
                ${todoItem.done ? 'checked' : ''}>
            <span style="${todoItem.done ? 'text-decoration: line-through;' : ''}">
                ${todoItem.text}
            </span>
            <button onclick="deleteTodo(${todoItem.id})">삭제</button>
        </li>
    `).join("");
}

// 완료 토글 (findIndex 사용)
function toggleTodoDone(id) {
    const index = todoList.findIndex(item => item.id === id);
    if (index !== -1) {
        todoList[index].done = !todoList[index].done;
    }
    renderTodoList();
}

// Todo 삭제 (filter 사용)
function deleteTodo(id) {
    todoList = todoList.filter(item => item.id !== id);
    renderTodoList();
}
```

### 2. 실시간 시계 앱 ([clock.html](./clock.html))
- **적용 개념**: `Date` 객체, `setInterval()`, `addEventListener()`, 삼항 연산자 포맷팅, 12시간제 변환

```javascript
let _24hourformat = true;

const formatChangeButton = document.getElementById("formatChangeButton");

// 12시간제 / 24시간제 변경 토글 이벤트 등록
formatChangeButton.addEventListener("click", () => {
    formatChangeButton.innerText = _24hourformat ? "24-hour-clock" : "12-hour-clock";
    _24hourformat = !_24hourformat;
    updateClock();
});

// 한 자리 숫자 앞에 0 붙이기
const pad = time => time < 10 ? '0' + time : time;

// 시간 업데이트 함수
const updateClock = () => {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // 24시간 포맷이 아닐 경우 12시간제로 변환 (0시는 12시로 표시)
    const displayHours = _24hourformat ? hours : hours % 12 || 12;

    document.getElementById('clock').innerText = `${pad(displayHours)}:${pad(minutes)}:${pad(seconds)}`;
}

// 최초 실행 및 1초 주기로 반복 실행
updateClock();
setInterval(updateClock, 1000);
```

### 3. 이름 입력 앱 ([name.html](./name.html))
- **적용 개념**: `hidden` 속성 제어, `addEventListener()`, 상태 토글을 통한 UI 업데이트

```javascript
let isNameSubmit = true;

const labelText = document.getElementById("labelText");
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitNameButton");

submitButton.addEventListener("click", () => {
    setName(nameInput.value);
});

const setName = (name) => {
    // 상태에 따른 화면 텍스트 설정
    labelText.innerText = isNameSubmit ? `안녕, ${name}` : "너의 이름은?";
    // input 박스 숨기기/보이기 제어
    nameInput.hidden = isNameSubmit;
    nameInput.value = isNameSubmit ? "" : `${name}`;
    // 버튼 텍스트 변경
    submitButton.innerText = isNameSubmit ? "수정" : "입력";

    isNameSubmit = !isNameSubmit;
};
```

---

## Ch.13 디버깅 포인트

실습 중 겪거나 주의해야 할 버그 및 해결책 정리.

| 증상 | 원인 | 해결 방법 |
|------|------|-----------|
| 클릭해도 아무 반응 없음 | `findIndex` 콜백에서 파라미터명 불일치 (`todoItem` → `item` 오타) | 콜백 파라미터명 통일 |
| 버튼 클릭 시 페이지 새로고침 | `<button type="submit">` (form 안의 기본값) | `type="button"`으로 명시 또는 `event.preventDefault()` 호출 |
| 텍스트 변경 시 input 사라짐 | `innerText`가 자식 DOM까지 초기화 | 텍스트 전용 `<span>` 분리 |
| map() 결과에 쉼표가 보임 | 배열을 그대로 `innerHTML`에 대입 | `.join("")` 추가 |
| 화살표 함수 안 변수 `undefined` | 파라미터명을 다르게 선언하고 다른 이름으로 사용 | 파라미터명과 사용명 일치 확인 |
| 실시간 시계에 0시가 00시로 표기됨 | `hours % 12` 연산 시 0시가 0이 되어 `00`이 됨 | `hours % 12 || 12` 처럼 0일 때 12로 대체하도록 구현 |
| input 숨길 때 요소 영역이 남음 | CSS `display: none`을 직접 쓰지 않고 `hidden` 속성을 이용해 브라우저 기본 레이아웃에서 제거 | `element.hidden = true` 속성 제어 활용 |

---

## Ch.14 옵셔널 체이닝과 널 병합 연산자

현재 로드맵의 **Step 1(로컬 스토리지 연동)** 및 **Step 2(모던 ES6+)** 과정에서 배우게 될 매우 유용하고 현대적인 문법들입니다.

### 1. 옵셔널 체이닝 (Optional Chaining) — `?.`

객체의 중첩된 프로퍼티를 읽을 때, 해당 객체가 `null` 또는 `undefined`여도 에러를 발생시키지 않고 안전하게 접근할 수 있도록 돕는 문법입니다.

*   **동작 원리**: `?.` 앞의 평가 대상이 `null`이나 `undefined`이면 평가를 멈추고 `undefined`를 반환합니다.

```javascript
const user = null;

// ❌ 에러 발생 (TypeError: Cannot read properties of null)
console.log(user.name);

// ✅ 에러 없이 undefined 반환 (스크립트가 중단되지 않음)
console.log(user?.name); 
```

#### 실무 적용 예시 (로컬 스토리지 데이터 로드 시)
[name.html](file:///Users/jaehkim/projects/web-basic/01-basic-dashboard/name.html) 등에서 로컬 스토리지를 처음 불러올 때 유용하게 쓰입니다.

```javascript
// 기존 안전장치 (AND 연산자)
const savedUser = JSON.parse(localStorage.getItem("user"));
if (savedUser && savedUser.name) {
    user.name = savedUser.name;
}

// 옵셔널 체이닝 적용 (더 직관적이고 간결함)
if (savedUser?.name) {
    user.name = savedUser.name;
}
```

---

### 2. 널 병합 연산자 (Nullish Coalescing Operator) — `??`

값이 `null` 또는 `undefined`일 때만 오른쪽 피연산자의 기본값을 대입하도록 해주는 연산자입니다.

*   **OR 연산자 (`||`)와의 차이점**: 
    *   `||`는 `falsy` 값(숫자 `0`, 빈 문자열 `""`, `false` 등) 전체를 기본값으로 덮어씁니다.
    *   `??`는 오직 `null`이나 `undefined`인 경우에만 기본값을 적용하므로 실제 유효한 빈 값들을 지켜줍니다.

```javascript
const count = 0;
const text = "";

// ❌ OR 연산자의 한계 (0과 빈 문자열이 무시되고 기본값이 세팅됨)
console.log(count || 10);  // 10 (0이 무시됨)
console.log(text || "기본값"); // "기본값" (빈 문자열이 무시됨)

// ✅ 널 병합 연산자 (오직 null/undefined만 잡고 0과 ""은 유지함)
console.log(count ?? 10);  // 0
console.log(text ?? "기본값"); // ""
```


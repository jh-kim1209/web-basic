# JavaScript 학습 노트

> 학습일: 2026-06-24  
> 프로젝트: `web-basic` (Todo List 앱 구현을 통한 실습)

---

## 목차

| 챕터 | 주제 | 학습 단계 |
|------|------|-----------|
| [Ch.1](#ch1-변수-선언) | 변수 선언: `var` / `let` / `const` | 기초 |
| [Ch.2](#ch2-연산자) | 연산자: 비교, 논리, 삼항 | 기초 |
| [Ch.3](#ch3-함수) | 함수: 선언식 vs 화살표 함수 | 기초 |
| [Ch.4](#ch4-객체-object) | 객체(Object)와 단축 속성 | 기초 |
| [Ch.5](#ch5-배열-array과-반복) | 배열(Array)과 반복 | 기초 |
| [Ch.6](#ch6-배열-고차-함수) | 배열 고차 함수: `filter` / `map` / `findIndex` / `join` | 중급 |
| [Ch.7](#ch7-템플릿-리터럴) | 템플릿 리터럴 | 중급 |
| [Ch.8](#ch8-dom-조작) | DOM 조작 | 중급 |
| [Ch.9](#ch9-이벤트-처리) | 이벤트 처리 | 중급 |
| [Ch.10](#ch10-비동기-처리-async--await) | 비동기 처리: `async` / `await` / `fetch` | 심화 |
| [Ch.11](#ch11-실습-todo-list-앱) | 실습: Todo List 앱 전체 코드 | 실습 |
| [Ch.12](#ch12-디버깅-포인트) | 디버깅 포인트 | 참고 |

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

### 기타 DOM 메서드

```javascript
// 포커스 이동
document.getElementById('todotext').focus();

// input 값 읽기 / 초기화
const value = document.getElementById('todotext').value;
document.getElementById('todotext').value = "";
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

## Ch.11 실습: Todo List 앱

오늘 배운 개념을 모두 적용한 완성 코드.

### 사용된 개념 목록

| 기능 | 적용 개념 |
|------|-----------|
| Todo 추가 | `push()`, 객체 단축 속성 |
| 화면 렌더링 | `map()`, `join()`, 템플릿 리터럴, `innerHTML` |
| 완료 토글 | `findIndex()`, 불리언 반전(`!`) |
| Todo 삭제 | `filter()` |
| 이벤트 연결 | 인라인 `onclick`, 템플릿 리터럴 |
| 상태 표현 | 삼항 연산자 |

### 완성 코드

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

---

## Ch.12 디버깅 포인트

오늘 실습 중 만난 버그 모음.

| 증상 | 원인 | 해결 방법 |
|------|------|-----------|
| 클릭해도 아무 반응 없음 | `findIndex` 콜백에서 파라미터명 불일치 (`todoItem` → `item` 오타) | 콜백 파라미터명 통일 |
| 버튼 클릭 시 페이지 새로고침 | `<button type="submit">` (form 안의 기본값) | `type="button"`으로 명시 |
| 텍스트 변경 시 input 사라짐 | `innerText`가 자식 DOM까지 초기화 | 텍스트 전용 `<span>` 분리 |
| map() 결과에 쉼표가 보임 | 배열을 그대로 `innerHTML`에 대입 | `.join("")` 추가 |
| 화살표 함수 안 변수 `undefined` | 파라미터명을 다르게 선언하고 다른 이름으로 사용 | 파라미터명과 사용명 일치 확인 |

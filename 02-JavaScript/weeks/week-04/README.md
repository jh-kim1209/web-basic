# 4주차: 비동기 아키텍처 및 멀티스레드 병렬 처리

## 📖 핵심 요약
자바스크립트의 가장 큰 특징이자 핵심적인 동작 모델인 **비동기 프로그래밍**을 심도 있게 다루고, 브라우저 메인 스레드의 연산 과부하를 막기 위한 **Web Workers** 및 **멀티스레딩(Multi-threading)** 병렬 처리 실무를 학습합니다.

*   **비동기 흐름 제어**: 콜백 지옥(Callback Hell)을 해소하기 위해 등장한 `Promise`의 다양한 상태(Pending, Fulfilled, Rejected)와 문법적 설탕인 `async/await`를 응용한 에러 핸들링.
*   **Web Workers**: 브라우저 메인 스레드와 별개로 백그라운드 스레드에서 스크립트를 실행할 수 있는 API입니다. 무거운 데이터 분석이나 렌더링용 계산을 백그라운드로 이관하여 화면이 버벅이는 현상을 방지합니다.
*   **Node.js Worker Threads**: 브라우저의 Web Workers와 마찬가지로, Node.js 서버 환경에서 다중 CPU 코어를 활용해 병렬 연산을 수행하기 위해 제공되는 모듈입니다.

## 🎯 학습 목표
1.  `Promise.all` 및 `Promise.race` 등 비동기 제어 메서드를 상황에 맞게 사용할 수 있다.
2.  `fetch` API를 사용하여 백엔드 데이터를 안정적으로 송수신하고 예외 처리를 규격화한다.
3.  Web Workers의 메시지 송수신(`postMessage`, `onmessage`) 구조를 구현하여 병렬 처리를 설계할 수 있다.

## 🧪 4주차 미션: 백그라운드 병렬 연산을 지원하는 비동기 데이터 뷰어 구현
*   **미션 파일**: `mission.js`
*   **요구 사항**:
    1.  `fetchLargeUserData(apiUrl)` 함수는 비동기식으로 외부 API(또는 Mock URL)로부터 대용량 사용자 JSON 데이터를 가져옵니다.
    2.  `runBackgroundFilter(users, criteria)` 함수는 메인 스레드의 성능 저하를 방지하기 위해 가상 Web Worker(또는 비동기 백그라운드 큐 시뮬레이션)를 기동시켜 데이터를 필터링합니다.
    3.  `filterWorker` 코드를 문자열 블롭(Blob URL) 또는 Worker 모듈 형태로 임베딩하여, 메인 스레드와 워커 스레드 간의 통신(`postMessage`)을 통해 검색어 매칭과 정렬을 백그라운드에서 완료한 결과를 가져오도록 설계하십시오.

## 📚 추천 참고서
*   *JavaScript Web Workers - A Practical Visual Guide 2026* - Chapter 2 & 3
*   MDN Web Docs - Using Web Workers & Promises

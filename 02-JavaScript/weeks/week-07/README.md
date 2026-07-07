# 7주차: 현대적 프레임워크 생태계 및 상태 관리

## 📖 핵심 요약
자바스크립트 기본기를 마친 뒤, 현대적인 프런트엔드 애플리케이션 개발의 핵심인 **React** 프레임워크 생태계로 진입합니다. 가상 DOM의 렌더링 동작 방식과 상태 관리 방법론을 이해합니다.

*   **Virtual DOM**: 실제 DOM의 경량화된 자바스크립트 복사본으로, 변경이 발생하면 이전 가상 DOM과 새 가상 DOM을 비교(Diffing)하여 최소한의 변경사항만 실제 DOM에 적용(Reconciliation)해 브라우저 렌더링 부하를 줄입니다.
*   **React Hooks**: 함수형 컴포넌트에서 컴포넌트 생명주기 및 상태 관리 기능을 주입하는 핵심 API입니다 (`useState`, `useEffect`, `useMemo` 등).
*   **Zustand 상태 관리**: Redux의 복잡성을 줄이고, 1주차에 작성한 클로저 기반 스토어와 유사한 단순 발행-구독 모델을 기반으로 하는 현대적인 상태 관리 솔루션입니다.

## 🎯 학습 목표
1.  가상 DOM 렌더링 과정을 이해하고 불필요한 리렌더링을 차단하기 위한 최적화 기법을 설명할 수 있다.
2.  Zustand와 유사한 초경량 글로벌 상태 관리 함수(`createZustandMock`)를 바닐라 자바스크립트로 직접 구현하여 상태 변화를 리액트 라이프사이클에 동기화할 수 있다.
3.  커스텀 훅(Custom Hook)을 작성하여 공통 상태 및 비즈니스 로직을 효율적으로 재사용한다.

## 🧪 7주차 미션: React 동기화용 경량 글로벌 상태 스토어 구현
*   **미션 파일**: `mission.js`
*   **요구 사항**:
    1.  `createStore(initialState)`를 기반으로 동작하되, React 컴포넌트가 이 상태를 구독하고 리렌더링될 수 있도록 돕는 `useStore(store, selector)` 커스텀 훅을 구현합니다.
    2.  `useStore` 훅은 컴포넌트가 마운트될 때 스토어를 구독하고, 언마운트될 때 구독을 안전하게 해제(`unsubscribe`)해야 합니다.
    3.  스토어의 특정 상태가 변경되어 `selector` 결과값이 바뀔 때만 React의 상태 업데이트 함수를 호출하여 컴포넌트를 선택적으로 리렌더링하게 구현하십시오.

## 📚 추천 참고서
*   *Modern React Foundations 2026* - Chapter 2 & 4
*   React Official Documentation (react.dev) - State Management & custom hooks

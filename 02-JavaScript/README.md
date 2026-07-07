# JavaScript Zero to Hero 8주 마스터 과정

이 프로젝트는 자바스크립트 기초부터 현대 프런트엔드/백엔드 아키텍처, TypeScript, 그리고 AI 연동까지 8주간 단계적으로 실습하며 학습하기 위한 환경입니다.

## 📁 디렉터리 구성

*   `weeks/`: 1주차부터 8주차까지의 주차별 학습 주제 정리 및 미션 코드를 포함하고 있습니다.
*   `milestones/`: 2주 간격으로 진행되는 대규모 미션 코드 통합 및 실무 애플리케이션 프로젝트입니다.
*   `progress.md`: 주차별 학습 및 미션 진행 상황을 스스로 기록하는 진도 트래커 파일입니다.

## 🚀 시작하기

### 1. 개발 의존성 설치
학습에 필요한 개발 라이브러리(TypeScript, Jest, ESLint, Prettier 등)를 설치합니다.
```bash
npm install
```

### 2. 코드 스타일 자동 정렬
코드 품질을 향상하기 위해 Prettier를 실행하여 포맷을 교정합니다.
```bash
npm run format
```

### 3. 코드 린트 검사
ESLint를 사용해 자바스크립트의 표준 문법 준수 및 안티패턴을 감사합니다.
```bash
npm run lint
```

### 4. 테스트 실행
각 미션 및 마일스톤에 작성된 테스트 코드(`.test.js` 또는 `.test.ts`)를 실행합니다.
```bash
npm test
```

## 📅 주차별 핵심 요약

1.  **1주차**: 실행 컨텍스트, 스코프 체인, 호이스팅, 클로저 동작 방식 마스터.
2.  **2주차**: ES6+ 문법 활용 및 고차 함수, 커링, Ramda 함수형 프로그래밍 입문.
3.  **3주차**: DOM 파싱 및 렌더링, 이벤트 위임, Web Components 표준 컴포넌트 설계.
4.  **4주차**: Promise/async-await 비동기 처리, 브라우저 Web Workers 및 Node.js Worker Threads 병렬 처리.
5.  **5주차**: V8 엔진 구조, 이벤트 루프와 태스크 큐 관리, 메모리 관리(GC) 및 메모리 누수 진단.
6.  **6주차**: TypeScript 타입 시스템 빌드 및 마이그레이션, 클린 코드 원칙(SRP), Jest 단위 테스트 검증.
7.  **7주차**: React 가상 DOM 렌더링, React Hooks, Zustand 전역 상태 관리, Next.js SSR 및 하이드레이션.
8.  **8주차**: AI LLM API 연동 및 스트리밍 데이터 처리, Docker 설정, Vercel 배포.

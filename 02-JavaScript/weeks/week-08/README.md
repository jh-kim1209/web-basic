# 8주차: AI 연동 프로덕션 풀스택 시스템 배포

## 📖 핵심 요약
8주간의 대장정을 마무리하며, 현대의 핵심 소프트웨어 요구사항인 **AI 서비스 연동**과 최종 서비스 배포를 위한 **Docker 컨테이너화** 및 **클라우드(Vercel) 배포 자동화** 파이프라인을 학습합니다.

*   **AI API 연동**: OpenAI 또는 Vertex AI와 같은 LLM API를 연동하여, 사용자의 프롬프트에 따른 실시간 답변 스트리밍 데이터 수신.
*   **SSE (Server-Sent Events)**: 단방향 웹 통신 표준으로, AI 답변이 실시간으로 생성될 때 클라이언트가 끊김 없이 실시간으로 토큰(텍스트 조각)을 수신하도록 돕습니다.
*   **컨테이너화 (Docker)**: 개발 환경과 배포 서버 환경의 불일치를 해소하기 위해 애플리케이션 실행 환경을 컨테이너로 패키징합니다.

## 🎯 학습 목표
1.  이벤트 스트림(ReadableStream) API를 제어하여 AI API의 실시간 스트리밍 데이터를 가공할 수 있다.
2.  도커 설정 파일(`Dockerfile`)을 작성하여 빌드 환경을 가상화한다.
3.  Vercel 등의 클라우드 플랫폼에 통합 웹 서비스를 성공적으로 배포한다.

## 🧪 8주차 미션: AI 스트리밍 데이터 가공 및 수신기 구현
*   **미션 파일**: `mission.js`
*   **요구 사항**:
    1.  `streamAIResponse(apiUrl, prompt, onChunk)` 함수는 비동기 함수로, AI API에 POST 요청을 보냅니다.
    2.  서버로부터 내려받는 응답 바디(`Response.body`)를 가독성 높은 `ReadableStream`의 텍스트 스트림 리더(Reader)로 읽어들입니다.
    3.  청크(Chunk)가 도착할 때마다 `onChunk(textChunk)` 콜백 함수를 실시간으로 즉시 실행하여 클라이언트가 텍스트 조각을 즉각적으로 화면에 업데이트할 수 있도록 설계하십시오.

## 📚 추천 참고서
*   *JavaScript Project Mastery 2026 (Lucas Kane)* - Chapter 8
*   MDN Web Docs - Streams API & Fetch API with Streams

/**
 * 8주차 미션: AI 스트리밍 데이터 가공 및 수신기 구현
 */

/**
 * streamAIResponse: AI API 서버와 연동하여 응답 스트림을 수신하고 실시간 콜백을 호출합니다.
 *
 * @param {string} apiUrl - AI API 엔드포인트 URL
 * @param {string} prompt - 보낼 사용자 질문 프롬프트
 * @param {Function} onChunk - 텍스트 조각 수신 시 실행할 콜백 함수 (e.g., (text) => console.log(text))
 * @returns {Promise<void>}
 */
export async function streamAIResponse(apiUrl, prompt, onChunk) {
  try {
    // TODO: fetch를 통해 POST 요청 전송 및 Response.body 획득
    // TODO: ReadableStream 리더(Reader) 및 TextDecoder를 이용해 데이터 청크 수신 및 디코딩
    // TODO: 각 청크 디코딩 텍스트를 실시간으로 onChunk(chunkText) 콜백으로 전달
  } catch (error) {
    console.error("Streaming error:", error);
  }
}

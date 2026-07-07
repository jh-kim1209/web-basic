/**
 * 4주차 미션: 백그라운드 병렬 연산을 지원하는 비동기 데이터 뷰어 구현
 */

/**
 * 1. fetchLargeUserData: 비동기 데이터 패치 함수
 * @param {string} url 
 * @returns {Promise<Array>}
 */
export async function fetchLargeUserData(url) {
  // TODO: fetch API와 async/await를 이용해 대용량 데이터 로드 및 예외 처리
  return [];
}

/**
 * 2. runBackgroundFilter: Web Worker를 동적으로 생성하여 대량 데이터 필터링을 병렬 처리
 * @param {Array} users 
 * @param {string} query 
 * @returns {Promise<Array>}
 */
export function runBackgroundFilter(users, query) {
  return new Promise((resolve, reject) => {
    // Web Worker 내부에서 실행될 코드 문자열 작성
    const workerCode = `
      self.onmessage = function(e) {
        const { users, query } = e.data;
        // TODO: query가 포함된 이름 또는 이메일을 필터링하는 로직 작성
        const filtered = [];
        self.postMessage(filtered);
      };
    `;

    // Blob을 이용해 동적으로 Worker 생성
    let blob;
    try {
      blob = new Blob([workerCode], { type: "application/javascript" });
      const workerUrl = URL.createObjectURL(blob);
      const worker = new Worker(workerUrl);

      // TODO: 워커에 데이터 및 검색 쿼리 전송 (postMessage)

      // TODO: 결과 수신 (onmessage) 시 resolve 호출 및 자원 정리(terminate)
      worker.onmessage = function(e) {
        resolve(e.data);
      };

      worker.onerror = function(err) {
        reject(err);
      };
    } catch (e) {
      // Node.js 또는 Web Worker를 미지원하는 환경(예: 테스트)에서의 폴백 동기 처리 구현
      const filtered = users.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase()) || 
        user.email.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }
  });
}

/**
 * 5주차 미션: 이벤트 리스너 및 타이머 메모리 누수 해결 모듈 구현
 */

export class SafeRegistry {
  constructor() {
    // TODO: 등록된 리스너 목록을 보관할 저장 공간 선언
    this.registry = [];
  }

  /**
   * registerListener: 대상 엘리먼트와 이벤트를 등록하고 리스너를 보관합니다.
   * @param {EventTarget} target - 이벤트를 부착할 대상 (DOM Element, window 등)
   * @param {string} event - 이벤트 이름 (e.g., 'click', 'scroll')
   * @param {Function} handler - 이벤트 핸들러 콜백 함수
   */
  registerListener(target, event, handler) {
    // TODO: target.addEventListener 호출 및 트래킹 배열에 저장
  }

  /**
   * clearAll: 등록된 모든 이벤트 리스너를 완전히 해제하여 메모리 누수를 방지합니다.
   */
  clearAll() {
    // TODO: 트래킹 배열의 모든 항목에 대해 removeEventListener 호출 및 배열 비우기
  }
}

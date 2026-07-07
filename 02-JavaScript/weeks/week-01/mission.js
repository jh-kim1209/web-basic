/**
 * 1주차 미션: 캡슐화된 상태 저장소(Store) 모듈 구현
 *
 * 아래 createStore 함수를 클로저를 활용하여 완성하세요.
 */

export function createStore(initialState = {}) {
  // TODO: 실제 상태를 보관하는 내부 변수 선언 (은닉화)
  let state = { ...initialState };

  // TODO: 상태 변경을 구독하는 리스너(콜백) 목록 배열 선언
  let listeners = [];

  /**
   * 1. 현재 상태를 반환하는 함수 구현 (불변성을 유지하기 위해 복사본 반환 권장)
   */
  function getState() {
    // TODO: 구현
    return state;
  }

  /**
   * 2. 상태를 안전하게 업데이트하고 리스너들을 알리는 함수 구현
   * @param {Object} newState
   */
  function setState(newState) {
    // TODO: 구현
  }

  /**
   * 3. 리스너를 추가하고 구독 해제 함수(unsubscribe)를 반환하는 함수 구현
   * @param {Function} listener
   * @returns {Function} unsubscribe
   */
  function subscribe(listener) {
    // TODO: 구현
    return function unsubscribe() {
      // TODO: 구독 해제 구현
    };
  }

  return {
    getState,
    setState,
    subscribe,
  };
}

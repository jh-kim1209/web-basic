/**
 * 7주차 미션: React 동기화용 경량 글로벌 상태 스토어 구현
 */
import { useState, useEffect } from "react";

/**
 * 1주차의 createStore와 결합하여 React 컴포넌트를 스토어와 연결해 주는 useStore 커스텀 훅을 구현하세요.
 *
 * @param {Object} store - 1주차에 구현한 형태의 스토어 인스턴스 (getState, subscribe를 가진 객체)
 * @param {Function} selector - 상태의 특정 부분을 선택하는 매핑 함수 (e.g., state => state.count)
 * @returns {*} 선택된 상태 조각
 */
export function useStore(store, selector = (state) => state) {
  // TODO: React의 useState를 이용해 스토어로부터 추출된 초기 상태값 설정
  const [slice, setSlice] = useState(null);

  useEffect(() => {
    // TODO: 스토어 구독(subscribe) 등록 및 상태 조각 변경 감지 로직 구현
    // TODO: 컴포넌트 언마운트 시 구독 취소(Clean-up) 처리
    return () => {};
  }, [store, selector]);

  return slice;
}

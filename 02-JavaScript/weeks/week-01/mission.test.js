import { jest } from "@jest/globals";
import { createStore } from "./mission.js";

describe("1주차 미션: 캡슐화된 상태 저장소(Store) 모듈 검증", () => {
  test("초기 상태가 정상적으로 로드되어야 합니다.", () => {
    const store = createStore({ count: 0, name: "Antigravity" });
    expect(store.getState()).toEqual({ count: 0, name: "Antigravity" });
  });

  test("setState로 상태를 업데이트할 때 얕은 복사 방식으로 부분 업데이트가 되어야 합니다.", () => {
    const store = createStore({ count: 0, name: "Antigravity" });
    store.setState({ count: 5 });
    expect(store.getState()).toEqual({ count: 5, name: "Antigravity" });
  });

  test("상태가 변경될 때 구독 중인 리스너가 호출되어야 합니다.", () => {
    const store = createStore({ count: 0 });
    const listener = jest.fn();
    
    store.subscribe(listener);
    store.setState({ count: 1 });

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith({ count: 1 });
  });

  test("unsubscribe 호출 이후에는 더 이상 리스너가 호출되지 않아야 합니다.", () => {
    const store = createStore({ count: 0 });
    const listener = jest.fn();
    
    const unsubscribe = store.subscribe(listener);
    store.setState({ count: 1 });
    expect(listener).toHaveBeenCalledTimes(1);

    unsubscribe();
    store.setState({ count: 2 });
    expect(listener).toHaveBeenCalledTimes(1); // 횟수가 늘어나지 않음
  });
});

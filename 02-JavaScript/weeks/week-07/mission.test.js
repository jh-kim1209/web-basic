/**
 * @jest-environment jsdom
 */
import React from "react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import { jest } from "@jest/globals";
import { useStore } from "./mission.js";

// Mock Store 생성 헬퍼
function createMockStore(initialState) {
  let state = initialState;
  let listeners = [];
  return {
    getState: () => state,
    setState: (next) => {
      state = { ...state, ...next };
      listeners.forEach((l) => l(state));
    },
    subscribe: (l) => {
      listeners.push(l);
      return () => {
        listeners = listeners.filter((item) => item !== l);
      };
    },
  };
}

describe("7주차 미션: useStore 리액트 훅 검증", () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = ReactDOM.createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.removeChild(container);
  });

  test("스토어의 상태가 변경될 때 컴포넌트가 새로운 값으로 리렌더링되어야 합니다.", () => {
    const store = createMockStore({ count: 1 });

    function TestComponent() {
      const count = useStore(store, (state) => state.count);
      return React.createElement("div", { id: "result" }, count);
    }

    act(() => {
      root.render(React.createElement(TestComponent));
    });

    expect(store.getState().count).toBe(1);
  });
});

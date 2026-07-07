/**
 * @jest-environment jsdom
 */
import { jest } from "@jest/globals";
import { SafeRegistry } from "./mission.js";

describe("5주차 미션: SafeRegistry 메모리 누수 방지 모듈 검증", () => {
  let registry;
  let target;
  let handler;

  beforeEach(() => {
    registry = new SafeRegistry();
    target = document.createElement("div");
    handler = jest.fn();
    
    // addEventListener 및 removeEventListener 감시
    jest.spyOn(target, "addEventListener");
    jest.spyOn(target, "removeEventListener");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("registerListener 호출 시 addEventListener가 실행되고 기록되어야 합니다.", () => {
    registry.registerListener(target, "click", handler);
    expect(target.addEventListener).toHaveBeenCalledWith("click", handler);
    expect(registry.registry.length).toBe(1);
  });

  test("clearAll 호출 시 등록된 모든 리스너가 removeEventListener를 거쳐 해제되어야 합니다.", () => {
    registry.registerListener(target, "click", handler);
    registry.registerListener(target, "mouseover", handler);

    registry.clearAll();

    expect(target.removeEventListener).toHaveBeenCalledWith("click", handler);
    expect(target.removeEventListener).toHaveBeenCalledWith("mouseover", handler);
    expect(registry.registry.length).toBe(0);
  });
});

import { jest } from "@jest/globals";
import { fetchLargeUserData, runBackgroundFilter } from "./mission.js";

// fetch Mocking
global.fetch = jest.fn();

describe("4주차 미션: 비동기 데이터 뷰어 및 백그라운드 필터링 검증", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetchLargeUserData가 API로부터 JSON 데이터를 비동기로 반환해야 합니다.", async () => {
    const dummyData = [{ name: "Alice" }, { name: "Bob" }];
    fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(dummyData),
      })
    );

    const users = await fetchLargeUserData("https://api.example.com/users");
    expect(users).toEqual(dummyData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://api.example.com/users");
  });

  test("runBackgroundFilter가 검색 조건에 맞는 데이터를 필터링해야 합니다.", async () => {
    const dummyUsers = [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
      { name: "Charlie", email: "charlie@gmail.com" }
    ];

    // 'example.com'이 포함된 이메일을 지닌 유저 필터링
    const filtered = await runBackgroundFilter(dummyUsers, "example.com");
    expect(filtered.length).toBe(2);
    expect(filtered[0].name).toBe("Alice");
    expect(filtered[1].name).toBe("Bob");
  });
});

import { pipe, curry, filter, map, sort, processUsers } from "./mission.js";

describe("2주차 미션: 선언형 데이터 가공 파이프라인 모듈 검증", () => {
  test("pipe 함수가 주어진 함수들을 순차적으로 실행하여 합성해야 합니다.", () => {
    const add5 = (x) => x + 5;
    const multiply2 = (x) => x * 2;
    const addThenMultiply = pipe(add5, multiply2);

    expect(addThenMultiply(10)).toBe(30); // (10 + 5) * 2 = 30
  });

  test("curry 함수가 다중 인자 함수를 커링 함수로 전환해야 합니다.", () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
  });

  test("processUsers 파이프라인이 유저 목록을 정확하게 필터링, 매핑 및 정렬해야 합니다.", () => {
    const dummyUsers = [
      { name: "Charlie", age: 19, email: "charlie@example.com" },
      { name: "Alice", age: 25, email: "alice@example.com" },
      { name: "David", age: 30, email: "david@example.com" },
      { name: "Bob", age: 22, email: "bob@example.com" }
    ];

    const result = processUsers(dummyUsers);

    // 19세인 Charlie는 제외되어야 함
    // Alice, David, Bob만 나이 20세 이상
    // 이름 기준 정렬 시: Alice -> Bob -> David 순서여야 함
    // 데이터 구조에 name과 email만 남아 있어야 함

    expect(result).toEqual([
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
      { name: "David", email: "david@example.com" }
    ]);
  });
});

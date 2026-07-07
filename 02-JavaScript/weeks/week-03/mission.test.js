/**
 * @jest-environment jsdom
 */
import { UserTable } from "./mission.js";

// 테스트를 위해 custom element 정의 등록
if (!customElements.get("user-table")) {
  customElements.define("user-table", UserTable);
}

describe("3주차 미션: 사용자 정보 테이블(UserTable) 컴포넌트 검증", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("user-table");
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test("Shadow DOM이 올바르게 부착되어 있어야 합니다.", () => {
    expect(element.shadowRoot).toBeTruthy();
  });

  test("users 데이터 주입 시 테이블 내에 올바르게 행(row)이 그려져야 합니다.", () => {
    element.users = [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" }
    ];

    const rows = element.shadowRoot.querySelectorAll("tbody tr");
    expect(rows.length).toBe(2);
    expect(rows[0].querySelectorAll("td")[0].textContent).toBe("Alice");
    expect(rows[1].querySelectorAll("td")[0].textContent).toBe("Bob");
  });
});

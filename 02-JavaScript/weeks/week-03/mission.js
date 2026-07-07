/**
 * 3주차 미션: 캡슐화된 사용자 정보 테이블(User Table) 웹 컴포넌트 구현
 *
 * 아래 UserTable 클래스를 완성하고 customElements.define을 호출하여 컴포넌트를 등록하세요.
 */

export class UserTable extends HTMLElement {
  constructor() {
    super();
    // TODO: Shadow DOM open 모드로 생성 및 부착
    this.attachShadow({ mode: "open" });

    // 내부 상태 관리 (사용자 데이터 및 현재 정렬 상태)
    this._users = [];
    this._sortKey = "";
    this._sortOrder = "asc"; // 'asc' or 'desc'
  }

  // 외부에서 users 데이터를 직접 주입하기 위한 Setter
  set users(data) {
    this._users = data;
    this.render();
  }

  get users() {
    return this._users;
  }

  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  /**
   * 이벤트 위임을 활용하여 테이블 헤더(th) 클릭 이벤트 리스너를 단일 바인딩합니다.
   */
  setupEvents() {
    // TODO: Shadow DOM 내부에 테이블 헤더 클릭 이벤트를 이벤트 위임으로 캡처하여
    // 클릭된 컬럼(sortKey)에 따라 정렬하고 다시 render()하는 로직 구현.
  }

  /**
   * 테이블을 화면에 그립니다. Shadow DOM 마크업 및 스타일 삽입.
   */
  render() {
    // 렌더링에 사용될 기본 스타일 정의 (Shadow DOM 내부로만 국한됨)
    const style = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          font-family: sans-serif;
        }
        th, td {
          padding: 8px 12px;
          border: 1px solid #ddd;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
          cursor: pointer;
          user-select: none;
        }
        th:hover {
          background-color: #e0e0e0;
        }
      </style>
    `;

    // TODO: _users 데이터를 루프 돌며 <tr><td> 행을 빌드하고 테이블을 출력
    this.shadowRoot.innerHTML = `
      ${style}
      <table>
        <thead>
          <tr>
            <th data-key="name">이름</th>
            <th data-key="email">이메일</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr> 행 생성 영역 -->
        </tbody>
      </table>
    `;
  }
}

// TODO: customElements.define('user-table', UserTable) 등록 호출

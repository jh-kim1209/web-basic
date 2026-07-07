# 3주차: 브라우저 DOM API & 컴포넌트 설계

## 📖 핵심 요약
브라우저 환경에서 동적인 웹 어플리케이션을 제어하기 위해 필수적인 **DOM API**와 웹의 리플로우(Reflow)/리페인트(Repaint) 성능 최적화 기법을 배우고, W3C 표준 스펙인 **웹 컴포넌트(Web Components)**를 이용해 캡슐화된 커스텀 UI를 작성하는 법을 학습합니다.

*   **DOM (Document Object Model)**: HTML 문서 구조를 객체 모델로 매핑한 API로, 동적 렌더링에 사용됩니다.
*   **이벤트 위임 (Event Delegation)**: 부모 컨테이너 노드에 단일 이벤트 리스너를 결합하여 하위의 다수 노드에서 발생하는 이벤트를 효율적으로 관리하는 기법입니다. 메모리 사용을 절약할 수 있습니다.
*   **웹 컴포넌트 (Web Components)**:
    *   **Custom Elements**: 사용자 정의 태그를 브라우저에 등록.
    *   **Shadow DOM**: 스타일과 마크업을 완전히 격리(캡슐화)하여 전역 CSS 충돌을 완벽 방지.
    *   **HTML Templates**: 재사용 가능한 템플릿 마크업 조각.

## 🎯 학습 목표
1.  이벤트 위임을 구현하여 동적으로 생성되는 리스트 아이템들의 이벤트를 안정적으로 감지할 수 있다.
2.  DOM을 직접 변경할 때 발생하는 성능 저하를 방지하기 위해 `DocumentFragment` 등의 최적화 기법을 도입한다.
3.  Shadow DOM이 래핑된 Custom Elements를 작성하여 스타일이 완전히 격리된 웹 컴포넌트를 설계한다.

## 🧪 3주차 미션: 캡슐화된 사용자 정보 테이블(User Table) 웹 컴포넌트 구현
*   **미션 파일**: `mission.js`
*   **요구 사항**:
    1.  `<user-table>` 형태의 Custom Element를 등록합니다.
    2.  컴포넌트 내부에 **Shadow DOM**을 부착하여(mode: 'open') 전역 스타일의 영향을 받지 않고 격리되도록 구현합니다.
    3.  컴포넌트에 `users` 속성(Property)으로 사용자 데이터 배열을 주입하면 자동으로 테이블을 그리도록 설계합니다.
    4.  테이블 헤더(`<th>`)를 클릭할 때 해당하는 열(이름, 이메일 등)을 기준으로 오름차순/내림차순 정렬할 수 있는 기능을 제공하며, 이를 **이벤트 위임**을 통해 헤더 클릭 이벤트를 단일 리스너로 바인딩하여 처리하십시오.

## 📚 추천 참고서
*   *Web Component Development with Modern Libraries and Tooling (Mark Volkmann)* - Chapter 1 & 3
*   MDN Web Docs - Web Components

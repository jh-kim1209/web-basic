import { formatApiResponse, RawApiResponse } from "./mission";

describe("6주차 미션: API 결과 포맷터 TypeScript 모듈 검증", () => {
  test("id가 누락되었을 때 예외가 발생해야 합니다.", () => {
    // 빈 객체를 넣었을 때 에러 발생 검증
    expect(() => formatApiResponse({} as any)).toThrow();
  });

  test("null값 및 기본값들이 정상적으로 할당되어야 합니다.", () => {
    const raw: RawApiResponse = {
      id: 123,
      user_name: null,
      created_at: "2026-07-07T00:00:00.000Z",
    };

    const cleaned = formatApiResponse(raw);

    expect(cleaned.id).toBe("123");
    expect(cleaned.userName).toBe("Anonymous");
    expect(cleaned.createdAt).toBeInstanceOf(Date);
    expect(cleaned.loginIp).toBe("0.0.0.0");
    expect(cleaned.isActive).toBe(false);
  });
});

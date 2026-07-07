/**
 * 6주차 미션: TypeScript 기반의 API 결과 포맷터 모듈 구현
 */

export interface RawApiResponse {
  id: string | number;
  user_name?: string | null;
  created_at?: string;
  meta_info?: {
    login_ip?: string;
    is_active?: boolean;
  };
}

export interface CleanedData {
  id: string;
  userName: string;
  createdAt: Date;
  loginIp: string;
  isActive: boolean;
}

/**
 * formatApiResponse: RawApiResponse 형태의 응답을 받아 규격에 맞는 CleanedData로 정제합니다.
 * @param rawResponse
 * @returns CleanedData
 * @throws {Error} 필수 필드(id)가 누락되거나 유효하지 않은 경우 예외 발생
 */
export function formatApiResponse(rawResponse: RawApiResponse): CleanedData {
  // TODO: 필수 id 검증 및 문자열 캐스팅
  // TODO: user_name이 없거나 null인 경우 'Anonymous' 문자열 기본값 처리
  // TODO: created_at 파싱하여 Date 객체로 변환 (유효하지 않은 날짜인 경우 현재 시간 기본값 처리)
  // TODO: meta_info 내부 값 디폴트 세팅 (loginIp: '0.0.0.0', isActive: false)

  return {
    id: "",
    userName: "",
    createdAt: new Date(),
    loginIp: "",
    isActive: false,
  };
}

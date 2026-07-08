/**
 * 2주차 미션: 선언형 데이터 가공 파이프라인 모듈 구현
 *
 * 아래 함수들을 함수형 프로그래밍 원칙을 준수하여 작성해 주세요.
 */

/**
 * 1. pipe: 입력받은 함수들을 왼쪽에서 오른쪽으로 순차적으로 합성하는 함수를 반환합니다.
 * @param {...Function} fns
 * @returns {Function}
 */
export function pipe(...fns) {
  // TODO: 구현
  return (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);
}

/**
 * 2. curry: 다중 인자 함수를 커링 함수로 변환합니다.
 * @param {Function} fn
 * @returns {Function}
 */
export function curry(fn) {
  // TODO: 구현
  return fn;
}

/**
 * 3. 커링된 데이터 정제 보조 유틸리티들
 */
// filter Helper (curry 적용)
export const filter = curry((predicate, list) => {
  // TODO: 원본 배열을 훼손하지 않는 필터 함수 구현
  return list;
});

// map Helper (curry 적용)
export const map = curry((mapper, list) => {
  // TODO: 원본 배열을 훼손하지 않는 맵 함수 구현
  return list;
});

// sort Helper (curry 적용)
export const sort = curry((compareFn, list) => {
  // TODO: 원본 배열을 훼손하지 않는 정렬 함수 구현
  return list;
});

/**
 * 4. processUsers: 위의 유틸리티들을 pipe로 합성하여 사용자 데이터를 가공하는 파이프라인 구축
 * - 요구 조건:
 *   1. 나이(age)가 20세 이상인 유저 필터링
 *   2. 이름(name)과 이메일(email) 필드만 남기는 맵핑 진행
 *   3. 이름(name)을 기준으로 알파벳 오름차순 정렬
 * @param {Array} users
 * @returns {Array} 가공 완료된 유저 목록
 */
export const processUsers = (users) => {
  // TODO: pipe(filter(...), map(...), sort(...))(users) 형태로 구현
  return users;
};

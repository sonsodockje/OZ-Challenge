/*  문제 출제
 *
 * - 우리는 숫자를 좋아하지만 홀수는 별로 좋아하지 않습니다.
 * - 그래서 우리는 주어진 숫자에서 홀수를 모두 빼고 남은 숫자들만 배열에 담아줍니다.
 *
 *❗️ 제한 조건 ❗️
 * - n은 자연수 입니다.
 *
 *
 * # 예시
 *- n이 5인 경우 결과 값 [2,4]
 */

function question(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question,
  [[10], [3], [8], [6], [9]],
  [
    [0, 2, 4, 6, 8, 10],
    [0, 2],
    [0, 2, 4, 6, 8],
    [0, 2, 4, 6],
    [0, 2, 4, 6, 8],
  ]
);

function Test(question, conditions, results) {
  for (let index in results) {
    const result = Array.isArray(results[index])
      ? JSON.stringify(question(...conditions[index])) ===
        JSON.stringify(results[index])
      : question(...conditions[index]) === results[index];
    console.log(`테스트 ${+index + 1}`, result);
    if (!result) {
      console.log("테스트에 통과하지 못했습니다.");
      return;
    }
  }

  console.log("테스트에 통과하셨습니다!");
}

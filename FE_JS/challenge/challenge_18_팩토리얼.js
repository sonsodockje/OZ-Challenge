/*  문제 출제
 * 주어진 양의 정수 n에 대해 n! (n 팩토리얼)을 계산하는 함수를 작성하세요.
 * 팩토리얼은 n부터 1까지의 모든 양의 정수를 곱한 값을 의미합니다.
 *
 *
 * ❗️ 제한 조건 ❗️
 * 입력으로 주어지는 값은 양의 정수이며, 0부터 1000까지의 범위로 가정합니다.
 * 팩토리얼은 재귀적으로 계산할 수 있습니다.
 * 팩토리얼은 수학적으로 n!으로 표기하며, 0!은 1로 정의됩니다.
 *
 *  👉 예시
 *  5! = 5 * 4 * 3 * 2 * 1 이므로 답은 120
 *
 */

function question(n) {
  // 여기에서 코드 작성해주세요!
  let result = 1;
  if (n === 0) return 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(question, [[5], [0], [1], [2], [3], [4], [6]], [120, 1, 1, 2, 6, 24, 720]);

function Test(question, conditions, results) {
  for (let index in results) {
    const result = question(...conditions[index]) === results[index];
    console.log(`테스트 ${+index + 1}`, result);
    if (!result) {
      console.log("테스트에 통과하지 못했습니다.");
      return;
    }
  }

  console.log("테스트에 통과하셨습니다!");
}

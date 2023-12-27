/*  문제 출제
 *
 * - 높이 n까지의 숫자가 쓰인 계단을 발견했습니다.
 * - 계단을 오를 때 규칙을 만들었는데, 그 규칙은 '오른 발로 밟는 계단에 쓰인 숫자를 더해서 기록한다'였습니다.
 * - 그런데, 오른 발로는 항상 짝수 번호의 계단만 밟는다는 특이한 습관이 있습니다.
 * - 모든 계단을 오르면서 기록한 숫자의 합을 구해보세요.
 *
 * ❗️ 제한 조건 ❗️
 * - n은 자연수 입니다.
 *
 */

function question(n) {
  let sum = 0;

  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }

  return sum;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question,
  [[10], [35], [59], [74], [49], [93], [10], [26], [69], [56]],
  [30, 306, 870, 1406, 600, 2162, 30, 182, 1190, 812]
);

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

/*  문제 출제
 *  자연수 n이 인수로 주어질 때, n을 나눠 나머지가 1이 되는 가장 작은 자연수를 구하는 함수를 구현해보세요!
 */

function question(n) {
  let result = 2;
  while (true) {
    if (n % result === 1) return result;
    else result++;
  }
}

Test(question, [[10], [12]], [3, 11]);

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

/* 문제 출제
 *
 * - 당신은 탐험가로, 잊혀진 섬에 있는 보물을 찾아 모험을 떠납니다.
 * - 보물은 숨겨진 곳에 있으며, 특정 문자를 가진 보물을 찾을 때마다 보물의 흔적이 나타납니다.
 * - 보물은 총 몇개인지 문자열에서 특정 문자의 개수를 세어 확인해보세요!
 */

function question(a, n) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === n) {
      result++;
    }
  }

  return result;
}

function question2(a, n) {
  return a.reduce((count, char) => (char === n ? count + 1 : count), 0);
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question2,
  [
    [["h", "a", "p", "p", "y"], "p"],
    [["h", "e", "l", "l", "o"], "o"],
    [["c", "h", "r", "i", "s", "t", "m", "a", "s"], "a"],
    [["네", "잎", "클", "로", "버", "로", "버", "오", "버"], "버"],
  ],
  [2, 1, 1, 3]
);

function Test(question, conditions, results) {
  for (let index in results) {
    const result = Array.isArray(results[index])
      ? JSON.stringify([question(...conditions[index])]) ===
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

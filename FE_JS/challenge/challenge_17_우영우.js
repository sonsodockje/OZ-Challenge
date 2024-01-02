/* 💡문제 출제
 *
 * 기러기 토마토 스위스 인도인 별똥별은 앞으로 읽어도 뒤로 읽어도 말이 같습니다.
 * 이것을 팰린드롬이라고 하는데 앞에서부터 읽어도 뒤에서부터 읽어도 같은 문자열을 의미합니다.
 * str: 팰린드롬 여부를 확인할 문자열 (1 이상 100 이하의 길이)
 * 주어진 문자열이 팰린드롬이면 true, 그렇지 않으면 false를 반환하세요.
 *
 *
 * ❗️ 제한 조건 ❗️
 * 문자열을 정제할 때 알파벳 이외의 문자는 제거하세요.
 * 함수는 대소문자를 구분하지 않아야 합니다.
 *
 * 👉 예시 결과
 * "A man, a plan, a canal: Panama" // true
 * "race a car" // false
 */

function question(str) {
  const refinedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const reversedStr = refinedStr.split("").reverse().join("");
  return refinedStr === reversedStr;
}
// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question,
  [
    ["A man, a plan, a canal: Panama"],
    ["race a car"],
    ["Was it a car or a cat I saw?"],
    ["No 'x' in Nixon"],
    ["No lemon, no melon"],
    ["A Santa at NASA"],
    ["Palindrome example"],
  ],
  [true, false, true, true, true, true, false]
);

function Test(question, conditions, results) {
  for (let index in results) {
    const result = question(...conditions[index]) === (results[index] === true);
    console.log(`테스트 ${+index + 1}`, result);
    if (!result) {
      console.log("테스트에 통과하지 못했습니다.");
      return;
    }
  }

  console.log("테스트에 통과하셨습니다!");
}

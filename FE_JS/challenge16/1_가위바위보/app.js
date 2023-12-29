let computer = ["가위", "바위", "보"];
let userChoice = "";

let gameResultText = document.getElementById("gameResultText");
let userBtnChoice = document.querySelectorAll(".userChoice");

// 기존코드 ------------------------------------------------------------
// userBtnChoice[0].addEventListener("click", function (e) {
//   choice(e.target.value);
// });
// userBtnChoice[1].addEventListener("click", function (e) {
//   choice(e.target.value);
// });
// userBtnChoice[2].addEventListener("click", function (e) {
//   choice(e.target.value);
// });

// 중복 줄이기 ----------------------------------------------------------
// for (let i = 0; i < userBtnChoice.length; i++) {
//   userBtnChoice[i].addEventListener("click", function (e) {
//     choice(e.target.value);
//   });
// }

// forEach로 모든 버튼에 이벤트 리스너 등록 ----------------------------------
userBtnChoice.forEach(function (button) {
  button.addEventListener("click", function (e) {
    choice(e.target.value);
  });
});

function choice(userChoice) {
  let computerChoice = computer[Math.floor(Math.random() * 3)];
  let result = winner(userChoice, computerChoice);
  gameResultText.innerHTML = `
                                <p>유저 선택 : ${userChoice}</p>
                                <p>컴퓨터선택 선택 : ${computerChoice}</p>                          
                                <h1>${result}</h1>
                            `;
}

function winner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "비김";
  if (
    (userChoice === "가위" && computerChoice === "보") ||
    (userChoice === "바위" && computerChoice === "가위") ||
    (userChoice === "보" && computerChoice === "바위")
  ) {
    return "유저 이김";
  } else {
    return "컴퓨터 이김";
  }
}

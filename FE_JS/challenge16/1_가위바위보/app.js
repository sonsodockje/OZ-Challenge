let computer = ["가위", "바위", "보"];
let img = [
  "https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzMTM3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDc4LzE2MjU1MjQwODMxMDA2LmpwZ3xiYzhjMzQ5ODEwM2JhYTRiYWFmYzBhZDBkMDFhNjYzNWY1NDBkMzc1OWZhM2FjZDg0ZjAwM2MzZTE3OTU2N2Zi",
  "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg",
  "https://previews.123rf.com/images/ampak/ampak1112/ampak111200008/11724275-%EC%86%90%EC%9D%84-%EC%86%90%EB%B0%94%EB%8B%A5%EC%9D%B4-%EB%8F%84%EC%9B%80%EC%9D%84-%EC%A0%9C%EA%B3%B5.jpg",
];
let userChoice = "";

let gameResultText = document.getElementById("gameResultText");
let userBtnChoice = document.querySelectorAll(".userChoice");

// let 가위이미지 = url("");
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
    choice(e.target.value, e.target.attributes["number"].value);
  });
});

function choice(userBtnChoice, userImgNumber) {
  let userChoice = userBtnChoice;
  let userChoiceImg = img[userImgNumber];

  let rn = Math.floor(Math.random() * 3);
  let computerChoice = computer[rn];
  let computerChoiceImg = img[rn];

  let result = winner(userChoice, computerChoice);
  gameResultText.innerHTML = `
                                <div class="wrap">
                                  <div class="user">
                                    <p>유저 선택 : ${userChoice}</p>
                                    <p><img src="${userChoiceImg}" alt=""></p>
                                  </div>
                                  <div class="com">
                                    <p>컴퓨터선택 선택 : ${computerChoice}</p>
                                    <p><img src="${computerChoiceImg}"alt=""></p>
                                  </div>
                                </div>                         
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
    return "님 이김";
  } else {
    return "님 짐";
  }
}

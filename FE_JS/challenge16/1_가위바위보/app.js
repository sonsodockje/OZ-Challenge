let computer = ["가위", "바위", "보"];
let img = [
  "https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzMTM3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDc4LzE2MjU1MjQwODMxMDA2LmpwZ3xiYzhjMzQ5ODEwM2JhYTRiYWFmYzBhZDBkMDFhNjYzNWY1NDBkMzc1OWZhM2FjZDg0ZjAwM2MzZTE3OTU2N2Zi",
  "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg",
  "https://previews.123rf.com/images/ampak/ampak1112/ampak111200008/11724275-%EC%86%90%EC%9D%84-%EC%86%90%EB%B0%94%EB%8B%A5%EC%9D%B4-%EB%8F%84%EC%9B%80%EC%9D%84-%EC%A0%9C%EA%B3%B5.jpg",
];
// 위에거 객체로 스정 하면 될듯
let gameResultText = document.getElementById("gameResultText");
let userChoice = document.querySelectorAll(".userChoice");
let winCount = 0;
let count = 0;

// 중복 줄이기 ----------------------------------------------------------
// for (let i = 0; i < userBtnChoice.length; i++) {
//   userBtnChoice[i].addEventListener("click", function (e) {
//     choice(e.target.value);
//   });
// }

// forEach로 모든 버튼에 이벤트 리스너 등록 ----------------------------------
userChoice.forEach(function (button) {
  button.addEventListener("click", function (e) {
    choice(e.target.value, e.target.attributes["number"].value);
  });
});

function choice(userChoice, userImgNumber) {
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
                                <h1>${count}번 경기중 ${winCount}번 이김.</h1>
                            `;
}

function winner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    count++;
    return "비김";
  }
  if (
    (userChoice === "가위" && computerChoice === "보") ||
    (userChoice === "바위" && computerChoice === "가위") ||
    (userChoice === "보" && computerChoice === "바위")
  ) {
    count++;
    winCount++;

    return "님 이김";
  } else {
    count++;
    return "님 짐";
  }
}

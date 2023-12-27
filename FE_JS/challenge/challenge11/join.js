// 값 출력
// 아이디 체크
// 비번체크
// 바디 초기화 후 텍스트 추가.
var form = document.forms["form"];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var element = form.elements;
  console.log(element);

  if (element.id.value.length < 6) {
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
    return;
  }

  if (element.password.value !== element.password2.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  for (var i = 0; i < form.elements.length - 2; i++) {
    var element = form.elements[i];
    console.log(element.name + ": " + element.value);
    console.log("--------------------------------");
  }

  document.body.innerHTML = "";
  document.write(`<p>${element.userName}님 환영합니다</p>`);
});

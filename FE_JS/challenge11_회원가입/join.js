var body = document.body;
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
  body.innerHTML = "";
  for (var i = 0; i < form.elements.length - 2; i++) {
    var element = form.elements[i];
    var content = `${element.name}: ${element.value}<br>`;
    body.innerHTML += content;
  }
});

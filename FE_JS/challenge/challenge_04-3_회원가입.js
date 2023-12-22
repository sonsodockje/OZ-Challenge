// 폼 제출 시 이벤트를 처리하는 함수
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.getElementById("email").value);
  console.log(document.getElementById("name").value);
  console.log(document.getElementById("password").value);
  console.log(document.getElementById("checkPassword").value);
  console.log(document.getElementById("number1").value);
  console.log(document.getElementById("number2").value);
  console.log(document.getElementById("number3").value);
  console.log(document.getElementById("area").value);
  var radioButtons = document.getElementsByName("gender");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      console.log(radioButtons[i].value);
      break;
    }
  }
});

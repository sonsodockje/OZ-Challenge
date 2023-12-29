const 추가 = document.getElementById("addBtn");
const 볼래 = document.getElementById("viewBtn");
const 지울래 = document.getElementById("removeBtn");
const div = document.getElementById("view");
const input = document.getElementById("userInput");

let arr = [];

추가.addEventListener("click", () => {
  arr.push(input.value);
  input.value = "";
  alert(`${arr[arr.length - 1]} 입력완`);
});

볼래.addEventListener("click", () => {
  const text = arr.length ? arr.join(", ") : (alert("없는디"), "");
  div.innerText = text;
});

지울래.addEventListener("click", () => {
  arr = [];
  div.innerText = "";
  alert("다 지웠다.");
});

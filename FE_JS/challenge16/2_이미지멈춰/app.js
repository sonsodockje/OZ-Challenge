let nIntervId;
let imgIndex = 0;
let imgBox = document.getElementById("img");

let imgArr = [
  "https://images.unsplash.com/photo-1570499956589-06ab0a4428f8?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1579961048032-9a7ee76cf697?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpcG11Y2t8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1536248337121-aebeba487bd4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1632748664456-5753f5f74f0c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1651979822227-31948d6c83bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1570500002694-6d4d641887a3?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1568332324127-dc63299cd255?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.namu.wiki/i/0m-nzOpOcJYKPaVbgOB9xyKVNMnRt3nEPPyScGeKUy0-YkjYn9nXcXQCLTEiEvi5eSMpnyWRN0fG2lQCXoarqQ.webp",
  "https://images.unsplash.com/photo-1632748666095-e47eaeaf94ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1652487953978-1dd03d4d5c59?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
];

console.log(imgArr.length);
function changeImg() {
  if (!nIntervId) {
    nIntervId = setInterval(work, 50);
  }
}
function work() {
  imgIndex = imgIndex % 10; //0~9 까지의 정수 반환
  imgBox.attributes[1].nodeValue = imgArr[imgIndex];
  imgIndex++; // 수 업데이트
}

function stopImg() {
  clearInterval(nIntervId);
  nIntervId = null;
}
changeImg();
document.getElementById("start").addEventListener("click", changeImg);
document.getElementById("stop").addEventListener("click", stopImg);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    stopImg();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    changeImg();
  }
});

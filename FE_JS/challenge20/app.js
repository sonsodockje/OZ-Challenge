const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/48";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";

const rsq1 = new XMLHttpRequest();
const rsq2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");

const currentDogs = [];

// 페이지 오픈시 강아지 사진 불러와서
// div를 만들고 div내 템플릿 넣고 div append 해줌.
window.addEventListener("load", () => {
  rsq1.open("get", apiRandomDogs);
  rsq1.addEventListener("load", () => {
    const response = JSON.parse(rsq1.response);
    response.message.forEach((item) => {
      currentDogs.push(item);
      Display(item);
    });
  });
  rsq1.send();
  // 셀렉트에 견종 정보 뿌리기
  rsq2.open("get", apiAllBreeds);
  rsq2.addEventListener("load", () => {
    const response = JSON.parse(rsq2.response);
    Object.keys(response.message).forEach((item) => {
      select.innerHTML += `<option value="${item}">${item}</option>`;
    });
  });
  rsq2.send();
});
// 버튼을 눌렀을 때만
button.addEventListener("click", () => {
  // 배열에서 남기고픈 것만 true인 것만 반환? => filter
  main.innerHTML = "";
  let buf = currentDogs.filter((item) => {
    return item.indexOf(input.value) !== -1;
  });
  input.value = "";
  buf.forEach((item) => {
    Display(item);
  });
});

// 칠때 실시간으로
input.addEventListener("keydown", (e) => {
  // 배열에서 남기고픈 것만 true인 것만 반환? => filter
  main.innerHTML = "";
  let buf = currentDogs.filter((item) => {
    return item.indexOf(input.value) !== -1;
  });
  buf.forEach((item) => {
    Display(item);
  });
});
select.addEventListener("change", (e) => {
  main.innerHTML = "";
  let buf = currentDogs.filter((item) => {
    return item.indexOf(select.value) !== -1;
  });
  buf.forEach((item) => {
    Display(item);
  });
});

function Display(item) {
  const dogImgDiv = document.createElement("div");
  dogImgDiv.classList.add("flex-item");
  dogImgDiv.innerHTML = `<img src=${item}>`;
  main.appendChild(dogImgDiv);
}

function more() {
  rsq1.open("get", apiRandomDogs);
  rsq1.addEventListener("load", () => {
    const response = JSON.parse(rsq1.response);
    response.message.forEach((item) => {
      if (!currentDogs.includes(item)) {
        currentDogs.push(item);
      }
      Display(item);
    });
  });
  rsq1.send();
}

function up() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드러운 스크롤 효과를 위해 "smooth" 사용
  });
}
function down() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth", // 부드러운 스크롤 효과를 위해 "smooth" 사용
  });
}

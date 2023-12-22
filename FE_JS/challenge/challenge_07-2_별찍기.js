for (let i = 1; i <= 5; i++) {
  let 별 = "";
  for (let j = 1; j <= i; j++) {
    별 += "* ";
  }
  console.log(별);
}

console.log("-------------------------------------");

for (let i = 1; i <= 5; i++) {
  let 별 = "";
  for (let j = 1; j <= i; j++) {
    별 += "* ";
  }
  console.log(별);
}
for (let i = 4; i >= 1; i--) {
  let 별 = "";
  for (let j = 1; j <= i; j++) {
    별 += "* ";
  }
  console.log(별);
}
console.log("-------------------------------------");
for (let i = 1; i <= 5; i++) {
  let 공백 = " ".repeat(5 - i);
  let 별 = "*".repeat(2 * i - 1);
  console.log(공백 + 별);
}
for (let i = 4; i >= 1; i--) {
  let 공백 = " ".repeat(5 - i);
  let 별 = "*".repeat(2 * i - 1);
  console.log(공백 + 별);
}

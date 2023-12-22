let sum = 0;
let number = 1;

while (number <= 50) {
  if (number % 2 !== 0) {
    sum += number;

    if (sum > 100) {
      break;
    }
  }

  number++;
}

console.log("홀수의 총합:", sum);

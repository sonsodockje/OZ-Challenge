let count = 0;
let number = 4;

while (count < 10) {
  let innerCount = 0;

  while (innerCount < 5) {
    if (innerCount > 0) {
      process.stdout.write(" ");
    }
    process.stdout.write(`${number}`);
    number += 4;
    innerCount++;
  }

  console.log();
  count++;
}

// Pradeep code is correct
let number = 12;
let count = 0;
for (let i = 0; i < number; i++) {
  if (i % 2 === 1) {
    count += number[i];
  }
}
console.log(count);


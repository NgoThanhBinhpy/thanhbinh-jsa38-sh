let num1 = 10;
let num2 = -25;
let num3 = 10.34;
let num4 = -0.5;
let num5 = 0xffff;
let num6 = 0b1010;
let num7 = 0o755;
let num8 = 1e6;
let x = 10;
let y = 20;

console.table([
  [num1, "positive integer"],
  [num2, "negative integer"],
  [num3, "positive float"],
  [num4, "negative float"],
  [num5, "hexadecimal"],
  [num6, "binary"],
  [num7, "octal"],
  [num8, "scientific notation"],
]);

console.table([
  [x, "x"],
  [y, "y"],
  [x + y, "x + y"],
  [x - y, "x - y"],
  [x * y, "x * y"],
  [x / y, "x / y"],
  [x % y, "x % y"],
  [x ** y, "x ** y"],
  [x ** (1 / y), "x**(1/y)"],
  [x > y, "x > y"],
  [x < y, "x < y"],
  [x >= y, "x >= y"],
  [x <= y, "x <= y"],
  [x == y, "x == y"],
  [x != y, "x != y"],
  [x === y, "x === y"],
  [x !== y, "x !== y"],
  [x && y, "x and y"],
  [x || y, "x or y"],
  [!x, "not x"],
]);

if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x is equal to y");
}
setInterval(() => {
  console.log("Interval says: Hello, World!");
}, 1000);
for (let i = 0; i < 5; i++) {
  console.log(`For loop iteration: ${i}`);
}
// kiểm tra điều kiện trước khi chạy, nên khi x đã bằng 15 thì sẽ không chạy nữa
while (x < 15) {
  console.log(`While loop: x is ${x}`);
  x++;
}
//chạy rồi kiểm tra điều kiện sau khi chạy, nên dù x đã bằng 15 thì vẫn chạy thêm một lần nữa
do {
  console.log(`Do-while loop: x is ${x}`);
  x++;
} while (x < 20);

let scoop = 4;

console.log(
  scoop >= 5
    ? "ăn nhanh lên, kem sắp chảy rồi"
    : scoop == 3
      ? "kem sắp hết!"
      : scoop == 2
        ? "lần một!"
        : scoop == 1
          ? "lần hai!"
          : scoop == 0
            ? "hết rồi!"
            : "vẫn còn nhiều kem, hãy đến lấy thêm",
);

let a1 = 5;
let a2 = 10;
let a3 = -15;
console.log(Math.max(a1, a2)); // 10
console.log(a1 * a2 * a3 < 0 ? "Dấu là -" : "Dấu là +");
for (let i = 0; i <= 15; i++) {
  console.log(i % 2 === 0 ? `${i} là chẵn` : `${i} là lẻ`);
}

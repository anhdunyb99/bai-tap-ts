import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a,b :number
a = parseInt(prompt('Nhap so nguyen a: '));
b = parseInt(prompt('Nhap so nguyen b: '));

console.log("Tong hai so a + b = ", (a + b))
console.log("Tong hai so a - b = ", (a - b))
console.log("Tong hai so a * b = ", (a * b))
console.log("Tong hai so a / b = ", (a / b))

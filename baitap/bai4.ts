import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a, b: number;
a = parseInt(prompt('Nhap chieu dai a: '));
b = parseInt(prompt('Nhap chieu rong b: '));
console.log('Chu vi hinh chu nhat la: ', 2 * (a + b));
console.log('Dien tich hinh chu nhat la: ', (a * b));


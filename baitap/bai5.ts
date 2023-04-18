import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a, b: number;
a = parseInt(prompt('Nhap ban kinh a: '));

console.log('Dien tich hinh cau la : ', 4 * (a ** 2) * Math.PI);
console.log('Dien tich hinh chu nhat la: ', (4 / 3) * Math.PI * (a ** 3));


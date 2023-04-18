import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a: number;
a = parseInt(prompt('Nhap so nguyen a: '));
console.log('a^2 = ', a ** 2)
console.log('a^3 = ', a ** 3)
console.log('a^4 = ', a ** 4)


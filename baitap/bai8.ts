import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a,b,biggestNumber: number;
a = parseInt(prompt('Nhap so nguyen a: '));
b = parseInt(prompt('Nhap so nguyen b: '));
biggestNumber = Math.max(a,b)
console.log('So lon nhat la : ',biggestNumber);

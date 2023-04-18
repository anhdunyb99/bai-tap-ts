import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a: number;
let b: any;
a = parseInt(prompt('Nhap so giay: '));
b = new Date(a * 1000).toISOString().slice(11, 19)
console.log('Thoi gian : ', b);

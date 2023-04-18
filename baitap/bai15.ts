import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a: number;
a = parseInt(prompt('Nhap so  a: '));
let string = a.toString()
let array = string.split('')
console.log("So lon nhat la :",Math.max.apply(null,array))
import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a,b,c,biggestNumber: number;
a = parseInt(prompt('Nhap so nguyen a: '));
b = parseInt(prompt('Nhap so nguyen b: '));
c = parseInt(prompt('Nhap so nguyen c: '));

biggestNumber = Math.max(a,b,c)
console.log("So lon nhat la : ",biggestNumber);

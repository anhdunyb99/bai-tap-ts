import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a, b, c: number;
a = parseInt(prompt('Nhap so nguyen a: '));
b = parseInt(prompt('Nhap so nguyen b: '));
c = parseInt(prompt('Nhap so nguyen c: '));

if ((a + b) > c && (a + c) > b && (b + c) > a) {
    console.log("a,b,c la canh cua tam giac");
} else {
    console.log('No');

}
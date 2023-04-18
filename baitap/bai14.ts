import { log } from 'console';
import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a: number;
let b:number = 0
a = parseInt(prompt('Nhap so  a: '));

while(a > 0){
    let rightmost = a % 10;
    b = b * 10 + rightmost ;
    a = Math.floor(a/10)
}

console.log("So dao nguoc la :",b);

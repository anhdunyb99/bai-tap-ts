import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a: number;
a = parseInt(prompt('Nhap so  a: '));
let string = a.toString()
let array = string.split('')

function sumArray(x:number){
    let sum = 0;
    for(let i in array){
        sum += Number(array[i])
    }
    return sum
}

console.log('Tong cac so:',sumArray(a));

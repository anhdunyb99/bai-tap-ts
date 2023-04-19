import * as promptSync from 'prompt-sync';
const prompt = promptSync();
const arraySize: number = 3
let array: number[] = []
for (let i = 0; i < arraySize; i++) {
    let a = parseInt(prompt('Nhap so  a: '));
    array.push(a)
}
console.log(array);

function averageRain(array:number[]): any {
    let sum : number = 0
    for (let i in array){
        sum += array[i]
    }
    return sum / array.length
}

console.log('Luong mua trung binh',averageRain(array));


for (let i of array){
    if(i > averageRain(array)){
        console.log(i);   
    }
}
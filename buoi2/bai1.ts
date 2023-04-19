import * as promptSync from 'prompt-sync';
const prompt = promptSync();
const arraySize : number = 3
let array : number[] = []
for (let i = 0 ; i < arraySize ; i ++ ){
  let a = parseInt(prompt('Nhap so  a: '));
    array.push(a)
}
console.log(array);
console.log('So lon nhat trong mang ', Math.max.apply(null,array));
console.log('So nho nhat trong mang ', Math.min.apply(null,array));

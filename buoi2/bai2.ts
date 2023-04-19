import * as promptSync from 'prompt-sync';
const prompt = promptSync();
const arraySize: number = 3
let array: number[] = []
for (let i = 0; i < arraySize; i++) {
    let a = parseInt(prompt('Nhap so  a: '));
    array.push(a)
}
console.log(array);
console.log('Vi tri so lon nhat ', array.indexOf(Math.max.apply(null, array)));
console.log('vi tri so nho nhat', array.indexOf(Math.min.apply(null, array)));


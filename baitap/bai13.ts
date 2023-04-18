import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let n: number;
function Fibonacci(x : number): number {
 if (x == 1 || x == 2 ) {
    return 1
 } 
 return Fibonacci(x - 1) + Fibonacci(x - 2)
}

n = parseInt(prompt('Nhap so n: '));
console.log('So Fibonaci',Fibonacci(n))
import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let a: number;

a = parseInt(prompt('Nhap so  a: '));

function isPrime(x: number) {

    if (x <= 1)
        return false;

    for (let i = 2; i < x; i++)
        if (x % i == 0)
            return false;

    return true;
}
function printPrime(y: number) {
    let sum = 0;
    let count = 0;
    for (let i = 2; i <= y; i++) {
        if (isPrime(i)) {
            sum += i
            count++
        }
        
    }
    return sum/count
}
console.log('Trung binh cong',printPrime(a));


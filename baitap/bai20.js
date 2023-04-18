"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a;
a = parseInt(prompt('Nhap so  a: '));
function isPrime(x) {
    if (x <= 1)
        return false;
    for (var i = 2; i < x; i++)
        if (x % i == 0)
            return false;
    return true;
}
function printPrime(y) {
    for (var i = 2; i <= y; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
printPrime(a);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var n;
function Fibonacci(x) {
    if (x == 1 || x == 2) {
        return 1;
    }
    return Fibonacci(x - 1) + Fibonacci(x - 2);
}
n = parseInt(prompt('Nhap so n: '));
console.log('So Fibonaci', Fibonacci(n));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a;
a = parseInt(prompt('Nhap so  a: '));
var string = a.toString();
var array = string.split('');
function sumArray(x) {
    var sum = 0;
    for (var i in array) {
        sum += Number(array[i]);
    }
    return sum;
}
console.log('Tong cac so:', sumArray(a));

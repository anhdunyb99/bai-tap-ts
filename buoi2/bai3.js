"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var arraySize = 3;
var array = [];
for (var i = 0; i < arraySize; i++) {
    var a = parseInt(prompt('Nhap so  a: '));
    array.push(a);
}
console.log(array);
function averageRain(array) {
    var sum = 0;
    for (var i in array) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log('Luong mua trung binh', averageRain(array));
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var i = array_1[_i];
    if (i > averageRain(array)) {
        console.log(i);
    }
}

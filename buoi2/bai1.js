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
console.log('So lon nhat trong mang ', Math.max.apply(null, array));
console.log('So nho nhat trong mang ', Math.min.apply(null, array));

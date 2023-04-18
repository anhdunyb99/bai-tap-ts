"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a;
var b = 0;
a = parseInt(prompt('Nhap so  a: '));
while (a > 0) {
    var rightmost = a % 10;
    b = b * 10 + rightmost;
    a = Math.floor(a / 10);
}
console.log("So dao nguoc la :", b);

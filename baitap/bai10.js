"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a, b, c;
a = parseInt(prompt('Nhap so nguyen a: '));
b = parseInt(prompt('Nhap so nguyen b: '));
c = parseInt(prompt('Nhap so nguyen c: '));
if ((a + b) > c && (a + c) > b && (b + c) > a) {
    console.log("a,b,c la canh cua tam giac");
}
else {
    console.log('No');
}

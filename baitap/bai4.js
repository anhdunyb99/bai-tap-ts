"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a, b;
a = parseInt(prompt('Nhap chieu dai a: '));
b = parseInt(prompt('Nhap chieu rong b: '));
console.log('Chu vi hinh chu nhat la: ', 2 * (a + b));
console.log('Dien tich hinh chu nhat la: ', (a * b));

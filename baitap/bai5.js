"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a, b;
a = parseInt(prompt('Nhap ban kinh a: '));
console.log('Dien tich hinh cau la : ', 4 * (Math.pow(a, 2)) * Math.PI);
console.log('Dien tich hinh chu nhat la: ', (4 / 3) * Math.PI * (Math.pow(a, 3)));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a, b, biggestNumber;
a = parseInt(prompt('Nhap so nguyen a: '));
b = parseInt(prompt('Nhap so nguyen b: '));
biggestNumber = Math.max(a, b);
console.log('So lon nhat la : ', biggestNumber);

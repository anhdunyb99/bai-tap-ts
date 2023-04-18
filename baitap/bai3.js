"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a;
a = parseInt(prompt('Nhap so nguyen a: '));
console.log('a^2 = ', Math.pow(a, 2));
console.log('a^3 = ', Math.pow(a, 3));
console.log('a^4 = ', Math.pow(a, 4));

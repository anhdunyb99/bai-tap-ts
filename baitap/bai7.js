"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a;
var b;
a = parseInt(prompt('Nhap so giay: '));
b = new Date(a * 1000).toISOString().slice(11, 19);
console.log('Thoi gian : ', b);

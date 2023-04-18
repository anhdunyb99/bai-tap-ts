"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a = parseInt(prompt('Nhap so nguyen a: '));
var b = parseInt(prompt('Nhap so nguyen b: '));
console.log("Tong hai so a + b = ", (a + b));

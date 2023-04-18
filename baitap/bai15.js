"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a;
a = parseInt(prompt('Nhap so  a: '));
var string = a.toString();
var array = string.split('');
console.log("So lon nhat la :", Math.max.apply(null, array));

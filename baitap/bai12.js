"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var sophut, tongtien;
var phi = 25000;
sophut = parseInt(prompt('Nhap so phut ban da goi: '));
if (sophut > 200) {
    tongtien = (sophut - 200) * 200 + 150 * 400 + 50 * 600;
}
else if (sophut > 50) {
    tongtien = (sophut - 50) * 400 + 50 * 600;
}
else {
    tongtien = sophut * 600;
}
console.log('Tong tien :', tongtien);

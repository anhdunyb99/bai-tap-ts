"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a;
a = parseInt(prompt('Nhap so nguyen a: '));
if (a >= 1 || a <= 12) {
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('31 ngay');
            break;
        case 2:
            console.log('28 ngay');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('30 ngay');
            break;
    }
}

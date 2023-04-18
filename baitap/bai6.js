"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var a, b, c;
a = prompt('Nhap so nguyen a : ');
b = prompt('Nhap so nguyen b : ');
c = prompt('Nhap so nguyen c : ');
if (parseInt(a) > 0 && parseInt(a) < 10 && parseInt(b) > 0 && parseInt(b) < 10) {
    console.log('0' + a + '/' + '0' + b + '/' + c);
}
else if (parseInt(a) > 9 && parseInt(a) <= 31 && parseInt(b) > 9 && parseInt(b) <= 12) {
    console.log(a + '/' + b + '/' + c);
}
else if (parseInt(a) > 0 && parseInt(a) < 10 && parseInt(b) > 9 && parseInt(b) <= 12) {
    console.log('0' + a + '/' + b + '/' + c);
}
else if (parseInt(a) > 9 && parseInt(a) <= 31 && parseInt(b) > 0 && parseInt(b)) {
    console.log(a + '/' + '0' + b + '/' + c);
}
else {
    console.log('So ban nhap khong hop le');
}

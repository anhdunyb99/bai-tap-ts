import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let sophut,tongtien: number;
const phi : number = 25000;
sophut = parseInt(prompt('Nhap so phut ban da goi: '));
if (sophut > 200){
    tongtien = (sophut - 200)*200 + 150*400 + 50 * 600
} else if (sophut > 50){
    tongtien = (sophut - 50) * 400 + 50* 600
} else {
    tongtien = sophut * 600
}

console.log('Tong tien :',tongtien);


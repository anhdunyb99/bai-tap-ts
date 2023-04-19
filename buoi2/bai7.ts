interface SinhVien {
    Ho : string,
    Ten : string, 
    Tuoi : number,
    Diachi : string,
    TrangThai : string
}

function printInfomation (pt: SinhVien) {
    if(pt.TrangThai === 'Di Hoc' && pt.Ten === 'Dung'){
        console.log('Di hoc toan');
    } else if (
        pt.TrangThai === 'Di Hoc' && pt.Ten === 'Hai'
    ){
        console.log('Di hoc van');
    }
    
    
}
printInfomation({Ho : 'Nguyen',Ten : 'Dung', Tuoi : 24, Diachi : 'Tran thai tong',TrangThai : 'Di Hoc'})
printInfomation({Ho : 'Nguyen',Ten : 'Hai', Tuoi : 22, Diachi : 'Xuan thuy',TrangThai : 'Di Hoc'})
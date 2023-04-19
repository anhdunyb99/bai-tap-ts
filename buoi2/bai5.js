var object1 = {
    fullName: 'Anoystick',
    occupation: 'Software developer',
    age: 31,
    website: 'https://annonystick.com'
};
var object2 = {
    fullName: 'Anoystick',
    occupation: 'Software developer',
    age: 31,
    website: 'https://annonystick.com'
};
//convert obj to array
var arrayKey = Object.keys(object1);
var arrayValue = Object.values(object1);
var array = arrayKey.concat(arrayValue);
var printLine;
//in tren tung dong
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var i = array_1[_i];
    console.log(i);
    printLine += i + " ";
}
// in tren 1 dong
console.log('printLine', printLine);

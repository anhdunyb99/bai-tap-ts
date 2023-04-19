const object1: {fullName : string,occupation : string,age : number ,website : string} = {
    fullName : 'Anoystick',
    occupation : 'Software developer',
    age : 31,
    website : 'https://annonystick.com'
}

const object2: {fullName : string,occupation : string,age : number ,website : string} = {
    fullName : 'Anoystick',
    occupation : 'Software developer',
    age : 31,
    website : 'https://annonystick.com'
}

//convert obj to array

let arrayKey : any = Object.keys(object1)
let arrayValue : any = Object.values(object1)

let array = arrayKey.concat(arrayValue)

let printLine : any
//in tren tung dong
for(let i of array){
    console.log(i);
    
    printLine += i + " "
}
// in tren 1 dong
console.log('printLine',printLine);





const people : {Ana : number, Alex : Number , John : number} = {
    Ana : 25,
    Alex : 28,
    John : 27,
}

const arrayName : any = Object.keys(people)
const arrayAge : any = Object.values(people)


let highestAge : number = Math.max.apply(null,arrayAge)
let indexArrayAge : number = arrayAge.indexOf(highestAge)


console.log('Nguoi lon tuoi nhat la',arrayName[indexArrayAge]);

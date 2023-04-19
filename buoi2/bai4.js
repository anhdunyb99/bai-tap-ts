var people = {
    Ana: 25,
    Alex: 28,
    John: 27,
};
var arrayName = Object.keys(people);
var arrayAge = Object.values(people);
var highestAge = Math.max.apply(null, arrayAge);
var indexArrayAge = arrayAge.indexOf(highestAge);
console.log('Nguoi lon tuoi nhat la', arrayName[indexArrayAge]);

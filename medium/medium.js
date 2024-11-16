// Write a function that will allow you to calculate how many slices of 
// pizza x each person y would get if they shared evenly. The function should 
// return an interpolated string like Each person gets 4.00 slices of pizza; 
// from our 8-slice pizza x being a decimal in case there is no way to split 
// the pizza evenly.
// x = slices in the pizza
// y = number of people

function calculatePizzaSlices(x, y) {
    // let x = slices;
    // let y = people;
    const slicesPerPerson = (x / y).toFixed(2); //toFixed returns the decimal points
    return `Each person gets ${slicesPerPerson} of pizza; from our ${x} slices of pizza`
}

console.log(calculatePizzaSlices(5, 2));
console.log(calculatePizzaSlices(10, 2));
console.log(calculatePizzaSlices(5, 7));
console.log(calculatePizzaSlices(88, 103));
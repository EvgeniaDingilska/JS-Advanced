function fruit(fruit, grams, pricePerKilogram){
    let weight = Math.round(grams/1000* 100) / 100;
    let money = Math.round(weight*pricePerKilogram* 100) / 100;
   return console.log(`I need ${'$'+ money} to buy ${weight} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.8);
fruit('apple', 1563, 2.35);

//from exercise leson
function fruitExercise(fruit, grams, pricePerKilogram){
    let weight = grams/1000;
    let money = weight*pricePerKilogram;
   return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}
   

console.log(fruitExercise('orange', 2500, 1.8));
console.log(fruitExercise('apple', 1563, 2.35));
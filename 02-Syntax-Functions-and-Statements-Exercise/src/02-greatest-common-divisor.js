function greatest(number, numberTwo){
    while(numberTwo != 0){
        let tepmorary = numberTwo;
        numberTwo = number % numberTwo
        number = tepmorary
    }
    return number
}

console.log(greatest(15,5))
console.log(greatest(2154,458))
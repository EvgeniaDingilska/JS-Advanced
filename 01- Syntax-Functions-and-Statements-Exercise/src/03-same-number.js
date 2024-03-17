function sameNumber(number){
   let string = number.toString();
   //let stringDifferent = number+" ";
   let sameNumber = true;
   let sum = 0;

   for (let i = 0; i < string.length; i++){
    let next = string[i+1];
    if (string[i]!== string[i+1] && next!==undefined){
        sameNumber = false;
    }
    sum += Number(string[i]);
    ///different way of casting string to number
    //sum = sum+ +string[i];
   }
    return `${sameNumber}\n${sum}`;
}

console.log(sameNumber(2222222));
console.log(sameNumber(1234));
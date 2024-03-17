
function timeToWalk(steps, stepsLength, km) {

    let distance = steps * stepsLength;
    let speed = km;
    let time = distance / speed;
    let rest = Math.floor(distance / 500);
 
 
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin *60));
    let timeInHours = Math.floor(time/3600);
    
    return (timeInHours < 10 ? "0" : "") + timeInHours + ":" + (timeInMin + rest < 10 ? "0" : "") + (timeInMin + rest) + ":" + (timeInSec < 10 ? "0" : "") + timeInSec;
}

console.log(timeToWalk(4000, 0.60,5))
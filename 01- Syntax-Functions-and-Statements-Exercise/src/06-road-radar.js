function roadRadar(speed, place) {
    let speedLimit;
    switch (place) {
        case `city`:
            speedLimit = 50;
            break;
        case `motorway`:
            speedLimit = 130;
            break;
        case `interstate`:
            speedLimit = 90;
            break;
        case `residential`:
            speedLimit = 20;
            break;
    }

    if (speed > speedLimit && speed - speedLimit <= 20) {

        return `The speed is ${(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - speeding`

    } else if (speed > speedLimit && speed - speedLimit > 20 && speed - speedLimit <= 40) {
        return `The speed is ${(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
    } else if (speed > speedLimit && speed - speedLimit > 40){
        return `The speed is ${(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - reckless driving`
    }else{
        return `Driving ${speed} km/h in a ${speedLimit} zone`
    }

}

//console.log(roadRadar(40, 'city'))
//console.log(roadRadar(21, 'residential'))
//console.log(roadRadar(120, 'interstate'))
console.log(roadRadar(200, 'motorway'))
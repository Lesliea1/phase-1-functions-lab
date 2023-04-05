// Code your solution in this file!

const headquarters = 42

function distanceFromHqInBlocks (block) {
    return block - headquarters;
}

function distanceFromHqInBlocks (block) {
    return Math.abs(block - headquarters)
}

const blockInFeet = 264;

function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks (distance) * blockInFeet;
}


function distanceTravelledInFeet (start, destination) {
    return (start - destination) * blockInFeet

}

function distanceTravelledInFeet (start, destination) {
    return Math.abs(start - destination) * blockInFeet
}

function calculatesFarePrice (start, destination) {

    let distance = distanceTravelledInFeet (start, destination)

    if ( distance < 400) {
        return 0;
    }
    else if (distance >= 400 && distance < 2000) {
        return (distance - 400) * 0.02
    }
    else if (distance >= 2000 && distance < 2500) {
        return 25;
    }
    else if (distance >= 2500) {
        return "cannot travel that far"
    }

}
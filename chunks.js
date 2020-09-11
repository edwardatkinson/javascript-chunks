

// FIND THE CLOSEST NUMBER TO ZERO IN AN ARRAY WHICH INCLUDES NEGATIVE NUMBERS
// IF THERE ARE DUPLICATES (e.g. 5, -5) RETURN POSITIVE
// IF ALL NEGATIVE NUMBERS, RETURN NEGATIVE

let measuringPoint = 0;
let finalAnswer = 0;

const closestNum = inputs.reduce((a, b) => {
    let aDiff = Math.abs(a - measuringPoint);
    let bDiff = Math.abs(b - measuringPoint);

    if (aDiff == bDiff) {
        // Choose largest vs smallest (> vs <)
        return a < b ? a : b;
    } else {
        return bDiff < aDiff ? b : a;
    }
});

function allNegative(value, index, array) {
    return value < 0;
}

let allNegativeNumbers = inputs.every(allNegative);

if (allNegativeNumbers === true) {
    finalAnswer = closestNum;
    console.log(finalAnswer);
    } else {
    const positiveInputs = inputs.map(Math.abs);
    const positiveClosestNum = Math.abs(closestNum);
    positiveInputs.forEach(function(item) {
        if (item === positiveClosestNum) {
            finalAnswer = item;
        }
    }); 
    console.log(finalAnswer);
}
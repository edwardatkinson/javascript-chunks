// FIND THE TWO NUMBERS CLOSEST TO EACH OTHER IN AN ARRAY
// EXAMPLE here uses an array of horses, where each horse has a strength
// STRENGTH is an integer in the array
// FIND the two strengths (integers or items in the array) that are closest
// FIND the two with the smallest difference

const horseArray = [];

const N = parseInt(readline()); // this grabs a single horse

for (let i = 0; i < N; i++) {
	// take the input, and push into an array
    horseArray.push(parseInt(readline()));
}

	// sort the array into ascending order, so that I only iterate through once
	// without sort first, algorithm has shit efficiency
function sortAscending() {
  horseArray.sort(function(a, b){return a-b});
}

sortAscending();

let closestSoFar = 10000000;

for (let i = 0; i < horseArray.length-1; i++) {
    const checkHorseOne = horseArray[i];
    const checkHorseTwo = horseArray[i + 1];
    const difference = checkHorseTwo - checkHorseOne;
    if (difference < closestSoFar) {
        closestSoFar = difference;
    }
}

console.log(closestSoFar);


// FIND HIGHEST NUMBER IN ARRAY

while (true) {
    let highestYet = 0;
    let chooseHighest = 0;
    for (let i = 0; i < 8; i++) {
        const newItemToCheck = parseInt(readline()); // represents a new item taken from an array 
        if (newItemToCheck > highestYet) {
            highestYet = newItemToCheck;
            chooseHighest = i;
        } else if (newItemToCheck < highestYet) {
            // don't need to do anything here
            // highestYet is still highest, and nothing needs to change
        }
    };

    console.log(chooseHighest);     // The index of the mountain to fire on.


}




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
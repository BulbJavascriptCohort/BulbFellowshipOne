// reuse

/**
*    function washingMachine(electricity, water, soap, clothe){
*        // do magic
*       return cleanClothe
*    }
*
*/

// air, train, land, water, fly
function train(money, starting, ending) { // do magic
    return atFinalDestination
}

function jollof(rice, pot, heat, ingredients) { // do magic
    return partyJollof
}


function nameOfFunction() {
    return answer
}


function addition(first, second) {
    return first + second
    console.log("This is after the return statement")
}

// Note: A function must always return something
// return in function: explicit returning
// return not in funtion: implicit function


// return is used to stop our function from running / exit our function
function printLocalGovernmentInState(indexOfState) {
    let myState = slga[indexOfState].state
    console.log(`The STATE is: ${
        myState.name
    }`)
    let i = 0 // start
    while (i < myState.locals.length) {
        console.log(myState.locals[i].name)
        i++
    }
}

function gbasgbos() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0) {
            console.log(i, "gbas")
        } else if (i % 5 === 0) {
            console.log(i, "gbos")
        }
    }
    // multiple of 3 ---- gbas 6,9
    // multiple of 5 ---- gbos 10,20
    // multiple of 3 & 5 ---- gbasgbos 15, 30 --- must print once
}


function gbasgbos() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, "gbasgbos")
        } else if (i % 5 === 0) {
            console.log(i, "gbos")
        } else if (i % 3 === 0) {
            console.log(i, "gbas")
        } else {
            console.log(i)
        }

    }
}

// destructure [] {}
// array destructuring
// object destructuring

let names = [
    "fatimah",
    "Segun",
    "Rabo",
    "Babatunde",
    "Eben",
    "Iyin",
    "Joshua",
    "Lola",
    "Mathew"
]

// console.log(... names)

let a;
[
    a,
    b,
    ...remainder
] = [... names]

// console.log(remainder)

function gbogbogbo(... a) {
    console.log(a[0])
}

// gbogbogbo(5, 6, 7)

function acceptParameters(a, ...extra) {
    console.log(a, extra)
    extra.forEach((value, index) => console.log(value))
}
// for (let i = 0; i < extra.length; i++) {
//     let value = extra[i]
//     let index = i
//     console.log(value)
// }
// }acceptParameters(209, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 2, 3, 4, 44, 5, 4, 543,)

function mutualDifferenceSanitised(...parameters) {
    let inputs = parameters
    let arrayOfDifs = []
    let arrayOfConfirmedDuplicate = []

    inputs.forEach((value, index) => {
        let isDuplicate = false
        for (let i = 0; i < value.length; i++) {
            for (let j = index + 1; j < inputs.length; j++) {
                if (inputs[j].includes(value[i]) || arrayOfConfirmedDuplicate.includes(value[i])) {
                    isDuplicate = true
                }

                if (! isDuplicate && j === inputs.length - 1) {
                    arrayOfDifs.push(value[i])
                }
                if (isDuplicate && j === inputs.length - 1 && ! arrayOfConfirmedDuplicate.includes(value[i])) {
                    arrayOfConfirmedDuplicate.push(value[i])
                }

            }
        }
    })
    return [arrayOfDifs, arrayOfConfirmedDuplicate]
}

function mD(...par) {
    let inputs = par;

    let arrOfDiff = [];

    inputs.forEach((value, index) => {
        for (let i = 0; i < value.length; i++) {
            let count = 0;
            let test = [... inputs];
            test.splice(index, 1);
            test.forEach((input) => {
                if (input.includes(value[i])) { // arrOfDiff.push(value[i]);
                    count++;
                }
            });
            if (count === 0) {
                arrOfDiff.push(value[i]);
            }
        }
    });
    console.log(arrOfDiff);
}
mD([
    3,
    3,
    3,
    2,
    5
], [
    2, 1, 5, 7
], [
    3, 4, 6, 6
], [
    1, 2, 3
], [
    5, 3, 9, 8
], [1]);

mutualDifferenceSanitised([
    7,
    3,
    3,
    3,
    2,
    5
], [
    2, 1, 5
], [
    3, 4, 6, 6
], [
    1, 2, 3
], [
    5, 3, 9, 8
], [1])

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

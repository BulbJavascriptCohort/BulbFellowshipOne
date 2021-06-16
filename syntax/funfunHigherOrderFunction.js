// HOF
// higher order functions

function addition(a, b) {
    return a + b
}


function subtraction(c, d) { // not commutative
    return c - d
}

function division(e, f) { // not commutative
    return e / f
}


/**
 * 
// c ===> callback
// addition ===> higher order function
 * 
 */

// an operation is said to be commutatitve

// a & b = b & a
// 2 + 5 = 5 + 2 // communtative
// 7 - 8 != 8 - 7 // not commutative

/**
 * 
 * @param {*} operation 
 * @param {*} firstOperand 
 * @param {*} secondOperand 
 * @returns 
 */


// operation is a callback
// isCommutative is an higher order function
function isCommutative(operation, firstOperand, secondOperand) {
    const leftSide = operation(firstOperand, secondOperand)
    const rightSide = operation(secondOperand, firstOperand)

    return leftSide === rightSide
}


// add, 6,7
// 6 + 7 == 13
// 7 + 6 == 13
// true

// sub 6, 7
// 6 - 7 === -1
// 7 - 6 === 1
// false

console.log(isCommutative(addition, 6, 7));
console.log(isCommutative(subtraction, 6, 7));

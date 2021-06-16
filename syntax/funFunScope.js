// variable scope
let y = 3
// GLOBAL VARIABLE

// GLOBAL
function a() { // LOCAL
    let x = 2
    // LOCAL VARIABLE
    console.log(y)

}

console.log(y)
console.log(x)

//
function almightyFormular(a, b, c) {
    let denominator = 2 * a
    let plusNumerator = (- b + Math.sqrt(Math.pow(b, 2) - (4 * a * c)))
    let minusNumerator = (- b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))

    let firstRootX = plusNumerator / denominator
    let secondRootX = minusNumerator / denominator
    return [firstRootX, secondRootX]
}


// A72F91
function generateCharacter() {
    return string
}
generateCharacter()

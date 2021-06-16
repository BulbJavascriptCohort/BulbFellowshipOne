function convertCelsiusToFariehnheit(celsius) {
    const fareiheight = celsius * 9 / 5 + 32
    return fareiheight
}

const convertFToC = (f) => {
    const top = (f - 32) * 5
    const celsius = top / 9
    return celsius
}

console.log(convertCelsiusToFariehnheit(0));
console.log(convertFToC(32));

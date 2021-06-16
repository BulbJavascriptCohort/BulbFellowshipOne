const cChecker = str => {
    str = str.toLowerCase()

    if (str[0] !== "c") {
        str = "c" + str
    }
    return str
}

console.log(cChecker("Canada"));
console.log(cChecker("Germany"));
console.log(cChecker("Croatia"));
console.log(cChecker("Nigeria"));

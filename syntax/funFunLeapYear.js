const isLeapYear = (year) => {
    if ((0 === year % 4) && (0 != year % 100) || (0 === year % 400)) {
        return true
    }
    return false
}


console.log(isLeapYear(1972))
console.log(isLeapYear(1956))
console.log(isLeapYear(1420))
console.log(isLeapYear(1988))

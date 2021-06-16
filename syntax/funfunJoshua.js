const rangeCheck = (x, y, z) => {
    if (x >= 50 && x <= 99 || y >= 50 && y <= 99 || z >= 50 && z <= 99) {
        return true
    }
    return false
}

console.log(rangeCheck(40, 12, 32));
console.log(rangeCheck(40, 55, 32));
console.log(rangeCheck(40, 2, 98));

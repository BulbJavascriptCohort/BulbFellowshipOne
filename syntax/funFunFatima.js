function toCheck(a, b, c) {
    const check1 = a % 10
    const check2 = b % 10
    const check3 = c % 10

    if (check1 === check2 && check1 === check3) 
        return true

    

    return false
}


console.log(toCheck(500, 650, 755));
console.log(toCheck(502, 652, 752));
console.log(toCheck(503, 653, 753));

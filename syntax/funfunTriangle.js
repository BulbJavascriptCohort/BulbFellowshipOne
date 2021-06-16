function areaOfTriangle(base, height) {
    return base * height * 0.5
}

const areaOfScalene = (sideA, sideB, sideC) => {
    const s = (sideA + sideB + sideC) * 0.5

    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))

    return area
}

console.log(areaOfScalene(12, 18, 20))

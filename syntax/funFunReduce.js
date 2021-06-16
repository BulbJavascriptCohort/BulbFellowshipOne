let h = [1, 2, 3, 4]
// total = 0, currentValue = 1, total = 1
// total = 1, currentValue = 2, total = 3
// total = 3, currentValue = 3, total = 6
// total = 6, currentValue = 4, total = 10

let total = 0
for (let j = 0; j < h.length; j++) {
    total += h[j]
}

console.log(total)

function reduce(accumulator, currentIndex) {

    for (let j = currentIndex; j < h.length; j++) {
        accumulator += h[j]
    }
    return accumulator
}

const reducer = (acc, cV) => accumulator + cV


console.log(reduce(0, 0))

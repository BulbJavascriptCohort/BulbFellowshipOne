const englishToYoruba = {
    "house": "ile",
    "goat": "ewure",
    "this": "eleyi",
    "is": "ni",
    "my": "temi",
    "big": "tobi",
    "head": "ori",
    "i": "emi",
    "go": "lo",
    "school": "ilewe",
    "to": "si",
    "a": ""

}

const englishToHausa = {
    "house": "ile",
    "goat": "ewure",
    "this": "ile",
    "is": "ile",
    "my": "ile"
}


function translator(phrase) {
    let sentence = phrase.toLowerCase() // "my head is big"
    const words = sentence.split(" ") // ["my", "head", "is", "big"]

    let translatedPhrase = " "
    for (let i = 0; i < words.length; i++) {
        if (englishToYoruba[words[i]]) {
            translatedPhrase += englishToYoruba[words[i]] + " "
        }
    }

    return translatedPhrase

}

const s1 = "My head is big"
console.log(`${s1} ===> ${
    translator(s1)
}`)

const s2 = "I go to school"
console.log(`${s2} ===> ${
    translator(s2)
}`)

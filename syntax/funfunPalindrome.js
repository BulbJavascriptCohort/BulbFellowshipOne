function isPalindrome(word) {
    let i = word.length - 1
    for (let index = 0; index < word.length; index++) {
        if (word[index] !== word[i]) 
            return false
        
        i--
    }
    return true
}


console.log(isPalindrome("civic"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("madame"));

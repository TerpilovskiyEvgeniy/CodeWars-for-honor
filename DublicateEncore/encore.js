duplicateEncode = (word) => {
    let count = '';
    let wordLower = word.toLowerCase().split("");
    for (let i = 0; i < wordLower.length; i++) {
        if (wordLower.lastIndexOf(wordLower[i]) === wordLower.indexOf(wordLower[i]) ){
            count += "(";
        }else count += ")";
    }
    return count
}
console.log(duplicateEncode("(( @"))
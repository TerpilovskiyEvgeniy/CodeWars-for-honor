const  firstNonRepeatingLetter = (s) => {
    let str = s.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        let char = str.slice(0,i) + str.slice(i + 1);
        if ((char.indexOf(str[i]) === -1)){
            return s[i];
        }
    }
    return ""
}
console.log(firstNonRepeatingLetter('sTreSS'))
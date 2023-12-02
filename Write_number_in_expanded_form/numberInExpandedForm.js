const expandedForm = (num) => {
    let numStrArray = num.toString().split("");
    for (let i = 0; i < numStrArray.length; i++) {
        for (let j = numStrArray.length - i; j > 1 ; j--) {
            numStrArray[i] += "0"
        }
    }
    numStrArray = numStrArray.filter(x => !x.startsWith(0))
    return numStrArray.join(" + ");
}
console.log(expandedForm(70304))
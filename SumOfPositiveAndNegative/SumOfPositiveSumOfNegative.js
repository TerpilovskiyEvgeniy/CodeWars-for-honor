function countPositivesSumNegatives(input) {
    let countPositive = 0;
    let coubtNegative = 0;
    if(input == null || input.length < 1) {
    return [];
    } else {
    input.map(item => {
        if(item > 0) {
        countPositive++;
            } else if(item < 0) {
            coubtNegative += item;
            }
        })
    }
    return [countPositive, coubtNegative]
}

console.log(countPositivesSumNegatives([1,2,3,-1,-2]))

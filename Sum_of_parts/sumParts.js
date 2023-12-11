const  partsSums = (ls) => {
    let sum = ls.reduce((acc,next) => acc + next,0);
    const array = [sum];
    for (let i = 1; i <= ls.length; i++) {
        sum -= ls[i-1]
        array.push(sum)
    }
    return array
}
console.log(partsSums([1, 2, 3, 4, 5, 6]))
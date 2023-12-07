const maxSequence = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j <= arr.length; j++) {
            if (arr.slice(i,j).reduce((acc,next)=> acc + next,0) > sum){
                sum = arr.slice(i,j).reduce((acc,value) => acc + value);
            }
        }
    }
    return sum > 0 ? sum : 0;
}
console.log(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]))

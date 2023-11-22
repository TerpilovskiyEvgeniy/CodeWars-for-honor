 moveZeros = (arr) => {
    let zero = arr.filter(item => item === 0);
    const numZeroDelete = 0;
    return arr.filter((num) => num !== numZeroDelete).concat(zero);
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
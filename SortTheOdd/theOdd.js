const sortArray = (arr) =>{
    const arrayOfNegative = [];
    arr.filter((a,i) => a % 2 && arrayOfNegative.push(i))
        .sort()
        .forEach((a,i) => arr[arrayOfNegative[i]] = a);
        return arr
}
console.log(findEvenIndex([5, 3, 2, 8, 1, 4]))
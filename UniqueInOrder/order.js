const uniqueInOrder = (iterable) => {
    if (iterable === Array.from(String)){
        const arrayOfInterable = iterable.split("");
        const res = [];
        for (let i = 0; i < arrayOfInterable.length; i++) {
            if (arrayOfInterable[i] !== arrayOfInterable[i+1]){
                res.push(arrayOfInterable[i])
            }
        }
        return res
    }
const res = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i+1]){
            res.push(iterable[i])
        }
    }
    return res
}
console.log(uniqueInOrder([1,2,2,3,3]))
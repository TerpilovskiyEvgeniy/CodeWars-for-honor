function isDivisible(n,...value){
    for (let i = 0; i < value.length; i++) {
        if (n % value[i] !== 0){
            return false
        }
    }
    return true
}
console.log(isDivisible(6,1,3))
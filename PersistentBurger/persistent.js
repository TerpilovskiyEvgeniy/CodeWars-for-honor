function persistence(num){
let arrayOfNumber = num.toString();
let count = 0;
    while (arrayOfNumber.length > 1){
        arrayOfNumber = arrayOfNumber.split("").map(Number).reduce((a,b) => a*b).toString();
        count++
    }
    return count
}
console.log(persistence(39))
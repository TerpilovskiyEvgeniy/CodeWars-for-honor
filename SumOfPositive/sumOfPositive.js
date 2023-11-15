
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}
function positiveSume(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
console.log(positiveSume([1,2,4,53,2]))
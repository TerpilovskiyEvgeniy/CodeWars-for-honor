const findEvenIndex = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        let right = arr.slice(i).reduce((a, b) => a + b, 0)
        let left = arr.slice(0, i+1).reduce((a, b) => a + b, 0);
        if (left === right) {
            return i
        }
    }
    return -1;
}
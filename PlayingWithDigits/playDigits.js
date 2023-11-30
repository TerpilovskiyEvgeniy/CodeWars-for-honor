var digPow = (n, p) => {
   let arrayN = Array.from(n.toString(),Number);
   let res = 0;
    for (let i = 0; i < arrayN.length; i++) {
        res += arrayN[i] ** p
        p++
    }

    return res % n === 0 ? res / n : -1;
}
console.log(digPow(46288,3))
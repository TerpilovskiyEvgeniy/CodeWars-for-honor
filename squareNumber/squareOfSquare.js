const isSquare = function(n){
    return n === Math.floor(Math.sqrt(n)) * Math.sqrt(n) ? true : false;
}
console.log(isSquare(57))
function zero(value) {
       return  value ? value(0) : 0;
}
function one(value) {
    return  value ? value(1) : 1;
}
function two(value) {
    return  value ? value(2) : 2;
}
function three(value) {
    return  value ? value(3) : 3;
}
function four(value) {
    return  value ? value(4) : 4;
}
function five(value) {
    return  value ? value(5) : 5;
}
function six(value) {
    return  value ? value(6) : 6;
}
function seven(value) {
    return  value ? value(7) : 7;
}
function eight(value) {
    return  value ? value(8) : 8;
}
function nine(value) {
    return  value ? value(9) : 9;
}

function plus(x) {
  return function (y){
      return x + y;
  }
}
function minus(x) {
    return  function (y) {
        return y - x;
    }
}
function times (x){
    return function (y) {
        return Math.floor(y * x);
    }
}
function dividedBy(x) {
    return  function (y){
        return Math.floor(y/x)
    }
}
console.log(seven(times(five())))
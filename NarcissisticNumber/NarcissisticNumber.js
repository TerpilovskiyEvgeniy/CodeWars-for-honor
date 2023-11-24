narcissistic = (value) => {
let arrayOfValue = Array.from(value.toString(),Number);
let count = arrayOfValue.map(item => item ** arrayOfValue.length);
let result = count.reduce((acc,next) => acc + next)
return result === value ? true : false;
}
console.log(narcissistic(1652))
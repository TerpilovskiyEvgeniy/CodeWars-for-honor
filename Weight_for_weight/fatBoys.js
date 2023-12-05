const cellSum = (value) =>{
    return  value.split("").reduce((acc,next) => acc + +next,0);
}
const orderWeight = (strng) => {
    return strng.split(" ")
        .sort((a,b) => cellSum(a) - cellSum(b) || -(a < b) || a>b)
        .join(" ");
}
console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
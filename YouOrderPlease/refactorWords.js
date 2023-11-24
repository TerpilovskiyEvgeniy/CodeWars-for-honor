 order = (words) => {
 let arrayOfWords = words.split(" ");
 arrayOfWords.sort((value1, value2) => {
  return parseInt(value1.match(/[1-9]/)) - parseInt(value2.match(/[1-9]/));
 });
 return arrayOfWords.join(' ');
}
console.log(order("is2 Thi1s T4est 3a"));


String.prototype.toJadenCase = function () {
 let arrayOfStr = this.split(" ").map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1));
 return arrayOfStr.join(" ")
};

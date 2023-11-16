function XO(str) {
  let strArray = str.toLowerCase().split("");
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < strArray.length; i++) {
    if(strArray[i] === "x"){
     ++ countX;
    }if(strArray[i] === "o"){
      ++ countO;
    }
  }
  if (countO === countX){
    return true
  } if  (countO === 0 && countX ==0) {
    return true
  } else return  false
}

console.log(XO("xxo"))

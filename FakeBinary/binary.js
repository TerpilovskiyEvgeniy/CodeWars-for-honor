function fakeBin(x){
    let fakeBinaryCode = " ";
    for (let i = 0; i < x.length; i++) {
      if (x[i] < 5){
          fakeBinaryCode += 0;
      } else if (x[i] >= 1){
          fakeBinaryCode += 1;
      }
    }
    return fakeBinaryCode
}
console.log(fakeBin('45385593107843568'))
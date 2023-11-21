 findOutlier = (integers) =>{
    let countNegative = [];
    let countPositive = [];
     for (let i = 0; i < integers.length; i++) {
         if (integers[i] % 2 === 0) {
             countPositive += integers[i]
         } else {
             countNegative += integers[i]
         }
     }
     if (countNegative.length > countPositive.length){
         return Number(countPositive);
     } else if (countPositive.length > countNegative.length ){
         return Number(countNegative);
     }

 }
 console.log(findOutlier([2,6,8,10,3]))


 const twoSum = (numbers, target) => {
    const numObj = {};
     for (let i = 0; i < numbers.length; i++) {
         numObj[numbers[i]] = i;
     }
        for (let i = 0; i < numbers.length; i++) {
            const difference = target - numbers[i];
                if (numObj[difference]){
                    return[i,numObj[difference]];
                }
        }
}
console.log(twoSum([1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,1,3,2143,12,5412,432], 4));
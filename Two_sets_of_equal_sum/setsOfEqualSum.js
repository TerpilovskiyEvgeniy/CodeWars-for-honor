const createTwoSetsOfEqualSum = (n) => {
    const sum = (n * (n + 1)) / 2;
    if (sum % 2 !== 0){
        return [];
    }

    const array1 = [];
    const array2 =[];
    let totalSum = sum/2;

    for (let i = n; i > 0; i--) {
        if (i <= totalSum){
            array1.push(i);
            totalSum -= i;
        }else {
            array2.push(i)
        }
    }

    if (array1.reduce((acc,next)=> acc + next) === array2.reduce((acc,next)=> acc + next)){
        return [array1,array2]
    }
    return []
    }




console.log(createTwoSetsOfEqualSum(8))

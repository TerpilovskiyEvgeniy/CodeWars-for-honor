const comp = (array1, array2) => {
    if (array1.length !== array2.length || !array1 || !array2){
        return  false;
    }
    const array1Sort = array1.map((elem)=> elem * elem).sort((a,b) => a - b);
    const array2Sort = array2.sort((a,b) => a - b);
        for (let i = 0; i < array1Sort.length; i++) {
            if (array1Sort[i] !== array2Sort[i]){
                return false
            }
    }
        return true
    }

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
const findUniq = (arr) => {
    let res = arr.sort();
        if (res[1] === res[0]) {
        return res[res.length-1]
        }
    return res[0]
}

console.log(findUniq([1,0,0]))
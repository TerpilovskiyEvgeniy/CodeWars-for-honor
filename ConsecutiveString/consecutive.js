longestConsec = (strarr, k) => {
    let res = "";
    for (let i = 0; k>0 && i <= strarr.length - k; i++) {
        let  array = strarr.slice(i, i + k).join("");
            if (array.length > res.length){
                res = array;
            }
    }
    return res;
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))

function isIsogram(str){
    str = str.toLowerCase().split("");
    const strSet = new Set(str);
    return  Array.from(strSet).length === str.length;
}

console.log(isIsogram("moOse"))
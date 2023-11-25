const generateHashtag = (str) => {
    let arrayStr = str.split(" ");
    let res = [];
    for(let i = 0; i < arrayStr.length ; i++ ){
        res += arrayStr[i].toUpperCase().slice(0,1) + arrayStr[i].slice(1);
    }
    if (res === ""|| res === " " || res.length >= 140){
        return false;
    }
    return `#${res}`
}
console.log(generateHashtag(" ".repeat(4)))
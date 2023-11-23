 pigIt = (str) => {
    str = str.split(" ");
    let arrayOfarrayStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "!" || str[i] == "?"){
            arrayOfarrayStr.push(str[i])
        }else {
            let word = str[i].slice(1) + str[i].charAt(0)+ "ay";
            arrayOfarrayStr.push(word)
        }
    }
    return arrayOfarrayStr.join(" ")
}
console.log(pigIt("Pig latin is cool"))
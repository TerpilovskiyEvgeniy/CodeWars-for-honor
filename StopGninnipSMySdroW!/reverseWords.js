function spinWords(string){
    const word = string.split(" ");
    let result = "";
    for (let i = 0;i<word.length;i++){
        if (word[i].length >= 5){
            result += word[i].split("").reverse().join("") + " ";
        } else result += word[i] + " ";
    }
    return result;

}
console.log(spinWords("Just gniddik there is still one more"))


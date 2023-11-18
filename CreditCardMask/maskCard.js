maskCard = str => {
    if (str.length<4){
        return str;
    }
    let maskify = str.slice(0,-4).split("");
    let lastFour = str.slice(-4);
    return maskify.map((elem)=> "#" ).join('') + lastFour;
}
console.log(maskCard("3"));
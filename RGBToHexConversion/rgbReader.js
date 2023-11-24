rgb = (r,g,b) =>{
return convertRGB(r)+convertRGB(g)+convertRGB(b);
}
convertRGB = (value) => {
    if (value < 0){
        return "00";
    }
    if (value > 255){
        value = 255;
    }
    return ("0"+(Number(value).toString(16))).slice(-2).toUpperCase();
}
console.log(rgb(173,255,47))

const parse = ( data ) => {
let count = 0;
const res = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === "i"){
            count++;
        }else if (data[i] === "d"){
            count--;
        }else if (data[i] === "s"){
            count *= count;
        }else if (data[i] === "o"){
            res.push(count)
        }
    }
    return res;
}
console.log(parse("iiisdoso"))
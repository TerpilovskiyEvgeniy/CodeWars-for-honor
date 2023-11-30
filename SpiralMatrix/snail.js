snail = (array) => {
    let left = 0,
        top = 0,
        right = array[0].length-1,
        bottom = array.length-1;
    let direction = "right";
    const resArray = [];

while (left <= right && top <= bottom){
    if (direction === "right"){
    for (let i = left; i <= right; i++) {
        resArray.push(array[top][i])
        }
        top += 1;
        direction = "down"
    }
            else if (direction === "down"){
            for (let j = top; j <= bottom; j++){
                resArray.push(array[j][right])
                }
                right -= 1;
                direction = "left"
            }
                else if (direction === "left"){
                for (let k = right; k >= left; k --){
                    resArray.push(array[bottom][k])
                    }
                    bottom -= 1;
                    direction = "top"
                }
                    else if (direction === "top"){
                    for (let n = bottom; n >= top; n--){
                        resArray.push(array[n][left])
                        }
                        left += 1;
                        direction = "right";
                    }
    }
    return resArray
}
console.log(snail([[1, 2, 3]
    ,                   [4, 5, 6],
                        [7, 8, 9]]))
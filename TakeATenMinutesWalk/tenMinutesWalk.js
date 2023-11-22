function isValidWalk(walk) {
    let count = 0;
    if (walk.length > 10 || walk.length % 2 !== 0 || walk.length < 10){
        return false
    }
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n'){
            count ++
        }else if (walk[i] === 's'){
            count --
        }else if (walk[i] === 'e'){
            count -= 2
        }else if (walk[i] === 'w'){
            count +=2
        }
    }
    if (count !== 0){
        return false
    }else  return  true
}
console.log(isValidWalk(['n','n','n','n','n','s','s','s','s','s']))

function arrayDiff(a, b) {
    let count = [];
    if (a.length <= 0){
        return []
    }else if (b.length <= 0){
        return a
    }else{
        for (let i = 0; i < a.length; i++) {
                  if (b.indexOf(a[i]) === -1) {
                      count.push(a[i])
                  }
        }
    }
    return count
}
console.log(arrayDiff([1,2,2,2,3],[2,3,4]))
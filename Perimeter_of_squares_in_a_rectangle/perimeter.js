const perimeter = (n) => {
    if (n === 0 ){
        return 4;
    }
    const result = [1,1];
        for (let i = 2; i <= n; i++) {
            result.push(result[i-2] + result[i-1])
    }
    return 4 * result.reduce((acc,next) => acc + next);
}
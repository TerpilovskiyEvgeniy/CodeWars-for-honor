function betterThanAverage(classPoints, yourPoints) {
    let resultClass = classPoints.reduce((acc, next) => (acc + next));
    const avarage = resultClass / classPoints.length;
    return avarage < yourPoints ? true : false;
}
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33],50))

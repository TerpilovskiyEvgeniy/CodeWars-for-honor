const cakes = (recipe, available) => {
    const count = [];
    for (const key in recipe) {
        available[key] ? count.push(Math.floor(available[key]/ recipe[key])) : count.push(0)
    }
    return Math.min(...count)
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
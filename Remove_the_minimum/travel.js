function removeSmallest(numbers) {
    const copy = numbers.slice(0);
    let indexMinValue = numbers.indexOf(Math.min(...numbers));
    copy.splice(indexMinValue,1)
    return copy
}
console.log(removeSmallest([145,105,340,369,105,309,374,105]))
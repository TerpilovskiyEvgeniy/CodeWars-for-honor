function findOdd(A) {
    let objectA = {};
    for (const objectAElement of A) {
     objectA[objectAElement] = (objectA[objectAElement] || 0) + 1;

        }
    return +Object.keys(objectA).find(objectAElement => objectA[objectAElement] % 2 == 1)
    }
  console.log(findOdd([1,2,2,2,1]))

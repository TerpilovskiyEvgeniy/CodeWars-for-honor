const validBracer = (braces) => {
    if (braces.length % 2 !== 0) {
        return false;
    }
    let match = {
        ")": "(",
        "}": "{",
        "]": "[",
}
    let stack = [];
    for (let i = 0; i < braces.length; i++) {
        if(braces[i] === "(" || braces[i] === "[" || braces[i] === "{"){
            stack.push(braces[i]);
        }else if (match[braces[i]] !== stack.pop()){
            return false;
        }
    }
    return stack.length === 0;
}
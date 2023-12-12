const revrot = (str, sz) => {
    if (sz <= 0 || str == '' || sz > str.length) {
    return '';
  }
    const arr = [];
    const s = str.split('');
        while (s.length >= sz) {
            arr.push(s.splice(0, sz));
        }
    const res = arr.map((x) => {
    const sum = x.reduce((a, c) => a + Math.pow(c, 3), 0);
        if (sum % 2) {
            x.push(x[0]);
            x.shift();
            return x.join('');
        } else {
        return x.reverse().join('');
    }
  });
  return res.join('');
}
console.log(revrot("123456987654", 6))
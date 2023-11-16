function digitalRoot(n) {
    if (n < 10){
        return n;
    }
    let value  = n;
    while (value >= 10) {
        value = 0;

        while (n > 0) {
            value += n % 10;
            n = Math.floor(n / 10);
        }

        n = value;
    }

    return value;
}
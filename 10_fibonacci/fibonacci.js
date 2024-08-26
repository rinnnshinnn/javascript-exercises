const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (typeof num !== 'number') num = Number(num);
    if (num === 0) return 0;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;

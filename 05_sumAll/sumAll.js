const sumAll = function(startingNum, endNum) {
    if (!Number.isInteger(startingNum) || !Number.isInteger(endNum)) {
        return "ERROR";
    }

    if (startingNum < 0 || endNum < 0) {
        return "ERROR";
    }

    if (startingNum > endNum) {
        let temp = startingNum;
        startingNum = endNum;
        endNum = temp;
    }

    let sum = 0;
    for (let i = startingNum; i <= endNum; i++) {
        sum += i;
    }

    return (Number.isInteger(sum) && sum > 0) ? sum : "ERROR";
};

// Do not edit below this line
module.exports = sumAll;

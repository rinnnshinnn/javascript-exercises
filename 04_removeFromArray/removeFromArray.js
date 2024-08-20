const removeFromArray = function(arrayNum = [], removeNum, ...removeMoreNum) {
    for (let i = arrayNum.length - 1; i >= 0; i--) {
        if (arrayNum[i] === removeNum || removeMoreNum.includes(arrayNum[i])) {
            arrayNum.splice(i, 1);
        }
    }

    return arrayNum;
};

// Do not edit below this line
module.exports = removeFromArray;

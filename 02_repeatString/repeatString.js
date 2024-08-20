const repeatString = function(string, num) {
    let theString = "";
    for (let i = 0; i < num; i++) {
        theString += string;
    }

    return (num >= 0) ? theString : "ERROR";
};

// Do not edit below this line
module.exports = repeatString;

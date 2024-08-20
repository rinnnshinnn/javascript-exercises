const reverseString = function(string) {
    let array = string.split("");
    let reversed = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;

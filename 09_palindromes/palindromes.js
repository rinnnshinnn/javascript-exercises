const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedWord = word
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    for (let i = 0; i < cleanedWord.length; i++) {
        if (cleanedWord[i] !== cleanedWord[cleanedWord.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

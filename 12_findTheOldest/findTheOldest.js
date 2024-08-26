const getAge = (yearOfBirth, latestYear) => {
    const currentYear = new Date().getFullYear();
    const age = latestYear ? latestYear - yearOfBirth : currentYear - yearOfBirth;

    return age;
}

const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

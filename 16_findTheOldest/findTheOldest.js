// const findTheOldest = function(arr) {
//     arr.sort((a, b)=> {
//         a.yearOfDeath = a.yearOfDeath || new Date().getFullYear();
//         b.yearOfDeath = b.yearOfDeath || new Date().getFullYear();
//         return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
//     });
//     return arr[0];
// };
function getAge(birth, death) {
    death = death || new Date().getFullYear();
    return death - birth;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current)=>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return currentAge > oldestAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

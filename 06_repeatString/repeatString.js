const repeatString = function(word, rep) {
    if(rep < 0) return 'ERROR';
    let wordSalad = '';
    while(rep) {
        wordSalad += word
        rep--;
    }
    return wordSalad;
};

// Do not edit below this line
module.exports = repeatString;

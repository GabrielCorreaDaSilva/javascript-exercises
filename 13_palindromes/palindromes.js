const palindromes = function (word) {
    const cleanWord = word.replace(/\W/g, "").toLowerCase();
    const half = Math.floor(cleanWord.length/2);
    let j = cleanWord.length -1;
    for(let i = 0; i <= half; i++){
        if(cleanWord[i] !== cleanWord[j]){
            return false;
        }
        j--;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;

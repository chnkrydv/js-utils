String.prototype.toSnake = function() {
    let strArr = this.split(' ');
    let newStr = '';
    let words = [];

    strArr.forEach( item => { if(item.length) words.push(item) });
    
    if(words.length === 1) {
        let word = words[0];
        let wordArr = [];

        if(word.includes('_')) wordArr = word.split('_');
        else if(word.includes('-')) wordArr = word.split('-');
        else {
            let oneWord = '';
            let charArr = word.split('');
            charArr.forEach( char => {
                if(char === char.toUpperCase() && oneWord.length) {
                    wordArr.push(oneWord);
                    oneWord = char;
                } else {
                    oneWord += char;
                }
            });

            if(oneWord.length) wordArr.push(oneWord);
        }

        newStr = wordArr.reduce( (final, curr) => final + '_' + curr.toLowerCase(), '');
    } else {
        newStr = words.reduce( (final, curr) => final + '_' + curr.toLowerCase(), '');
    }
    
    return newStr.charAt(0) === '_' ? newStr.slice(1) : newStr;
}

module.exports = this;
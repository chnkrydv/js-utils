String.prototype.toCamel = function() {
    let firstCap = str => str.charAt(0).toUpperCase() + str.slice(1);
    let firstSmall = str => str.charAt(0).toLowerCase() + str.slice(1);
    let strArr = this.split(' ');
    let newStr = '';
    let words = [];

    strArr.forEach( item => { if(item.length) words.push(item.toLowerCase()) });
    
    if(words.length === 1) {
        let word = words[0];
        let wordArr = word.includes('_') ? word.split('_') : word.split('-');

        newStr = firstSmall(wordArr.reduce( (final, curr) => final + firstCap(curr) , ''));
    } else {
        newStr = firstSmall(words.reduce( (final, curr) => final + firstCap(curr), ''));
    }
    
    return newStr;
}

module.exports = this;
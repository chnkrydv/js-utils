String.prototype.deepTrim = function() {
    let wordArr = this.split(' ');
    
    return (wordArr.reduce( (sentence, word) => sentence + (word.length ? word + ' ' : '') , '')).trim();
}

module.exports = this;
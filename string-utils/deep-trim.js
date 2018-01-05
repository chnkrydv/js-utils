String.prototype.deepTrim = function() {
    let wordArr = this.trim().split(' ');

    return wordArr.reduce( (sentence, word) => sentence + (word.length ? word + ' ' : '') , '');
}

module.exports = this;
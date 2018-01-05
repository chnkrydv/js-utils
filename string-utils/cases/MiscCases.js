String.prototype.firstCap = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.firstSmall = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

String.prototype.allFirstCap = function() {
    let firstCap = str => str.charAt(0).toUpperCase() + str.slice(1);
    let strArr = this.split(' ');
    
    return (strArr.reduce( (y, x) => y + (x.length ? firstCap(x) + ' ' : ' '), '')).trim();
}

String.prototype.allFirstSmall = function() {
    let firstSmall = str => str.charAt(0).toLowerCase() + str.slice(1);
    let strArr = this.split(' ');
    
    return (strArr.reduce( (y, x) => y + (x.length ? firstSmall(x) + ' ' : ' '), '')).trim();
}

String.prototype.letterWave = function(isFirstLetterCapital) {
    let firstCap = (typeof isFirstLetterCapital === 'boolean' && isFirstLetterCapital === false) ? 0 : 1;
    let charArr = this.split('');
    
    return charArr.reduce( (y, x, i) => (
        y + (x.length ? ( 
                (i + firstCap) % 2 ? 
                    x.toLocaleUpperCase() 
                    : x.toLocaleLowerCase()
            ) 
            : ' ')           
    ), '');
}

String.prototype.wordWave = function(isFirstwordCapital) {
    let firstCap = (typeof isFirstwordCapital === 'boolean' && isFirstwordCapital === false) ? 0 : 1;
    let wordArr = this.split(' ');
    
    return wordArr.reduce( (y, x, i) => (
        y + (x.length ? ( 
                (i + firstCap) % 2 ? 
                    x.toLocaleUpperCase() 
                    : x.toLocaleLowerCase()
            ) + ' '
            : ' ')           
    ), '');
}

module.exports = this;
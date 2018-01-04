String.prototype.firstCap = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.firstSmall = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

String.prototype.allFirstCap = function() {
    let firstCap = str => str.charAt(0).toUpperCase() + str.slice(1);
    let strArr = this.split(' ');
    let newStr = firstCap(strArr[0]);

    strArr.map( item => {
        newStr += item.length ? ' ' + firstCap(item) : ' ';
    })

    return newStr;
}

String.prototype.allFirstSmall = function() {
    let firstSmall = str => str.charAt(0).toLowerCase() + str.slice(1);
    let strArr = this.split(' ');
    let newStr = firstSmall(strArr[0]);

    strArr.map( item => {
        newStr += item.length ? ' ' + firstSmall(item) : ' ';
    })
    
    return newStr;
}

module.exports = this;
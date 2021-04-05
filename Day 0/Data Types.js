function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    var x = parseInt(secondInteger) + firstInteger;
    console.log(x);
    
    var d = parseFloat(secondDecimal) + firstDecimal;
    console.log(d);
    
    var s = firstString + secondString;
    console.log(s);
}

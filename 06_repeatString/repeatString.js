const repeatString = function(string, num) {

    let newString = string;
    if(num==0){
        return "";
    }
    else if ( num < 0) {
    return "ERROR";
    }
        
    for(let i = 1; i < num; i++) {
      newString += string;
    }
    return newString;
}
repeatString('Nirdosh',7);
// Do not edit below this line
module.exports = repeatString;

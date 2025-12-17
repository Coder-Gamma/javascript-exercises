const reverseString = function(string) {
    let stringArr = string.split("");
    stringArr.reverse();
    return stringArr.join("");
};
const result  = reverseString('Hello Javascript');
console.log(result);
// Do not edit below this line
module.exports = reverseString;


   

const sumAll = function(a,b) {
 let total = 0;

 if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
 if(a < 0 || b < 0) return "ERROR";
    if(a>b){
          while(b<=a) {
        total = total + b;
        b++;
    }
    return total;
    }
    else {
  while(a<=b) {
        total = total + a;
        a++;
    }
    return total;
    }
  
};

const result = sumAll(10,4);

// Do not edit below this line
module.exports = sumAll;

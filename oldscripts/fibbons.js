
var fibArray = function(n) {
    var f = [];
    n < 2 ? f.push(n) : f.push(fibArray(n-1) + fibArray(n-2));
    return f;
};
console.log(n);

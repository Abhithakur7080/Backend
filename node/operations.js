module.exports.add = function(a, b) { // accessable outside
    return a+b;
}

exports.substract = function(a, b) { // accessable outside
    return a-b;
}

var multiply = function(a, b) { //not acessable outside
    return a*b;
}
var Calculator = function() {

};

Calculator.prototype.add = function(a, b) {
	return a + b;
};

Calculator.prototype.minus = function(a, b) {
	return a - b;
};

Calculator.prototype.mul = function(a, b) {
	return a * b;
};

Calculator.prototype.divide = function(a, b) {
    if(b === 0){
        throw 'b should not be zero';
    }
    else{
        return a / b;
    }
};
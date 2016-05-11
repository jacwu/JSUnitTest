describe("Calculator", function() {
  
  var calc;
  
  beforeAll(function() {
	calc = new Calculator();
  });
  
  describe("Test Add and Minus", function(){
      it("add 1 and 3 should equal 4", function() {
         expect(calc.add(1, 3)).toBe(4);
      });
      
      it("minus 3 by 1 should equal 2", function() {
         expect(calc.minus(3, 1)).toBe(2);
      });
  });

  describe("Test Mul and Divide", function(){
        it('multiply 4 and 2 should equal 8', function() {
            expect(calc.mul(4, 2)).toBe(8);
        });
        
        it('divide 6 by 2 should equal 3', function() {
            expect(calc.divide(6, 2)).toBe(3);
        });
               
  });

});
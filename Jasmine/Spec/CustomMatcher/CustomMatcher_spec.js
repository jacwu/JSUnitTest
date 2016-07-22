var customMatchers = {
    IsEven: function(){
        return {
            compare: function(actual){
                var result = {
                    pass: false
                };
                if(actual % 2 == 0){
                    result.pass = true;
                    result.message = "Expect " + actual + " to be even";
                }
                else{
                    result.message = "Expect " + actual + " to be even, but it was not";
                }
                
                return result;
            }
        };
    },
    
    IsBetween: function(){
        return {
            compare:function(actual, min, max) {
                var result = {
                    pass: false
                };
                
                if(actual >= min && actual <= max){
                    result.pass = true;
                }
                else{
                    result.pass = false;
                }
                return result;
            }          
        };
    }
}

describe("Custom matcher Test", function() {
    beforeEach(function() {
        jasmine.addMatchers(customMatchers);
    });
    
    it("against IsEven", function(){
       expect(16).IsEven(); 
    });
    
    it("against IsBetween", function(){
       expect(8).IsBetween(4, 10); 
    });
       
});

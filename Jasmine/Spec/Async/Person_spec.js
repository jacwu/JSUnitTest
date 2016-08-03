describe("Test Async", function () {
    
    var p = new Person();
    
    beforeEach(function(done){
        setTimeout(function () {
            p.setAge(12);            
            done();
        }, 3000);
    });
    
    it("on done implementation", function () {
        expect(p.age).toEqual(12);
    });
});

describe("Test Async with clock tick", function () {
    
    var p = new Person();
    
    beforeEach(function(done){
        jasmine.clock().install();
        setTimeout(function () {
            p.setAge(12);            
            done();
        }, 3000);
        
        
        jasmine.clock().tick(3000);
        
    });
    
    afterEach(function(){
        jasmine.clock().uninstall();
    });
    
    it("on clock mock", function () {
        expect(p.age).toEqual(12);
    });
});

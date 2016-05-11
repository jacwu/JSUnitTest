describe("Spies Test", function () {
    it("for spyOn against CarAssemble function", function () {
        var fake = new CarAssemble();
        spyOn(fake, "addWheel");
        spyOn(fake, "addEngine");
        
        fake.assemble();
        
        expect(fake.addWheel).toHaveBeenCalled();
        expect(fake.addWheel).toHaveBeenCalledTimes(4);
        expect(fake.addEngine).toHaveBeenCalledWith("V8");
        
        expect(fake.addWheel.calls.any()).toEqual(true);
        expect(fake.addWheel.calls.count()).toEqual(4);
    });
    
    it("for spyOn against JQuery", function () {
        spyOn(jQuery, "ajax");
        
        InfoMgr.post();
        
        expect(jQuery.ajax).toHaveBeenCalled();
    })
})


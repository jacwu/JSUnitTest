var myCustomQuality = function (first, second) {
    expect(first.canSwim).toBeDefined();
    expect(first.canWalk).toBeDefined();
    expect(first.color).toBeDefined();
    return first.canSwim == second.canSwim && first.canWalk == second.canWalk &&
        first.color == second.color;
    
}

describe("Custom Equality Test", function () {
    beforeEach(function () {
        jasmine.addCustomEqualityTester(myCustomQuality);
    });
    
    
    it("against duck class", function () {
        var d = {
            canSwim : true,
            canWalk : true,
            canClimb: true,
            color: "white"
        };
        
        var duck = new Duck();
        expect(d).toEqual(duck);
    })
})
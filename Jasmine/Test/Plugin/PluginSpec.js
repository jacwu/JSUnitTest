describe("Jasmine Jquery", function () {
    
    beforeEach(function(){
        setFixtures('<div id="container">abc</div><button id="btn" onclick="ChangeContainerText()">Click</button>');
    });
    
    it("container should have hello world text", function () {
        expect($("#btn")).toExist();
        $("#btn").trigger("click");
        expect($("#container")).toHaveText("hello world");
        
    });
});

describe("Ajax Mock", function () {    
    beforeEach(function(done) {
        setFixtures('<div id="container">abc</div>');
        jasmine.Ajax.install();
        
        jasmine.Ajax.stubRequest('/mysite/url').andReturn({
        "responseText": 'I am from ajax call'});

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(args) {
                if (this.readyState == this.DONE) {
                    ChangeContainerText(this.responseText);
                    done();
                }
            };

        xhr.open("GET", "/mysite/url");
        xhr.send();
    });
    
    afterEach(function() {
        jasmine.Ajax.uninstall();
    });
    
    it("container should have text from ajax call", function () {      
        expect($("#container")).toHaveText("I am from ajax call");
    });
});

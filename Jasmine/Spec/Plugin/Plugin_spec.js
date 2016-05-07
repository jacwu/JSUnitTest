describe("Jasmine Jquery Plugin Test", function () {
    describe("setFixtures", function () {
        beforeEach(function(){
            setFixtures('<div id="container"></div><button id="btn" onclick="ChangeContainerText()">Click</button>');
        });
    
        it("container should have hello world text", function () {
            expect($("#btn")).toExist();
            $("#btn").trigger("click");
            expect($("#container")).toHaveText("hello world");
            
        });
    });
    
    describe("loadFixtures", function () {    
        beforeEach(function(){
            jasmine.getFixtures().fixturesPath = 'fixtures';
            loadFixtures('PluginFixture.html');
        });
        
        it("container should have hello world text", function () {
            expect($("#btn")).toExist();
            $("#btn").trigger("click");
            expect($("#container")).toHaveText("hello world");            
        });
    });    
});

describe("Jasmine Ajax Plugin Test ", function(){
       describe("mock call back", function(){ 
               var request, myText, myCallback;    
               beforeEach(function() {
                   jasmine.Ajax.install();
                   
                   myCallback = jasmine.createSpy("success"); 
                   ajaxRequest(myCallback);       
                   request = jasmine.Ajax.requests.mostRecent();     
               });     
               afterEach(function() { 
                   jasmine.Ajax.uninstall();
               });
   
               it("myCallback should be called on",function(){
                   expect(request.method).toBe('GET');       
                   expect(myCallback).not.toHaveBeenCalled(); 
                   expect(request.url).toBe('/site/test');
                   myText = "Hello World";       
                   request.respondWith({"success": myCallback(myText)});    
                   expect(myCallback).toHaveBeenCalled();    
                   expect(myCallback).toHaveBeenCalledWith("Hello World");
               });  
      }); 
      
      describe("stubRequest", function () {    
        beforeEach(function() {
            jasmine.getFixtures().fixturesPath = 'fixtures';
            loadFixtures('PluginFixture.html');
            
            jasmine.Ajax.install();
            
            jasmine.Ajax.stubRequest('/site/test').andReturn({
            "responseText": 'I am from stubRequest'});       
        });
        
        afterEach(function() {
            jasmine.Ajax.uninstall();
        });
        
        it("container should be updated", function () {   
            ajaxRequest(ChangeContainerText);   
            expect($("#container")).toHaveText("I am from stubRequest");
        });
        
    });
    
    describe("Ajax Calls with $.ajax", function(){            
        it("success call back should be called", function(){ 
                spyOn($, "ajax").and.callFake(function(e) {                 
                    e.success("hello world");             
                });           
                var myCallback;           
                myCallback = jasmine.createSpy();           
                showError = jasmine.createSpy();             
                ajaxRequestWithJQuery(myCallback,showError);             
                expect(myCallback).toHaveBeenCalled();
                expect(myCallback).toHaveBeenCalledWith("hello world");              
                expect(showError).not.toHaveBeenCalled();

        });
    });
});


    






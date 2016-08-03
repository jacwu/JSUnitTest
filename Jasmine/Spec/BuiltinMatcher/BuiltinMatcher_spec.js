describe("Built in matchers:", function () {
    
  it("toBe", function() {
    var a = {};
    var b = a;
    var c = {};

    expect(a).toBe(b);
    expect(a).not.toBe(c);
  });
    
  it("toMatch", function() {
    var message = "foo bar baz";
    
    expect(message).toMatch("bar");
    expect(message).not.toMatch("bar2");
  });

  it("toBeDefined", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
  });

  it("toBeUndefined", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).not.toBeUndefined();
    expect(a.bar).toBeUndefined();
  });

  it("toBeNull", function() {
    var a = null;
    var foo = "foo";

    expect(a).toBeNull();
    expect(foo).not.toBeNull();
  });

  it("toBeTruthy", function() {
    var a, foo = "foo";

    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
  });

  it("toBeFalsy", function() {
    var a, foo = "foo";

    expect(a).toBeFalsy();
    expect(foo).not.toBeFalsy();
  });

  it("toContain", function() {
    var a = ["foo", "bar", "baz"];

    expect(a).toContain("bar");
    expect(a).not.toContain("quux");
  });

  it("toBeCloseTo", function() {
    var a = 3.78,
      b = 3.76;

    expect(a).not.toBeCloseTo(b, 2);
    expect(a).toBeCloseTo(b, 1);
  });

  it("toThrow", function() {
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });
  
})
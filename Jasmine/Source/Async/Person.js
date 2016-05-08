function Person() {
    this.age = 0;
    this.name = null;
}

Person.prototype.setAge = function (input) {
    this.age = input;
}

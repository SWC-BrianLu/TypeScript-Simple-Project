"use strict";
var CPersonInfo = /** @class */ (function () {
    function CPersonInfo(name, age, hasPet) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    CPersonInfo.prototype.printInfo = function () {
        console.log("\n            Name: " + this.name + "\n            Age: " + this.age + "\n            Owns a pet? " + this.hasPet + "\n        ");
    };
    return CPersonInfo;
}());
var mark = new CPersonInfo('Mark', 21, false);
mark.printInfo();

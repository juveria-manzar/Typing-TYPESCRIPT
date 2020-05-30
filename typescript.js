//tsc typescript.ts --watch
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello world');
//variable declaration
var me = "Juveria";
var random;
random = true;
//arrays
var numbers = [1, 2, 3, 4];
//function
//return a no.
function doStuff(name) {
    console.log(name);
    console.log(name);
    return 1;
}
doStuff("Juveria");
var person;
person = {
    name: 'Juveria',
    other: false
};
//enums
var Platform;
(function (Platform) {
    Platform[Platform["PC"] = 0] = "PC";
    Platform[Platform["XBOX"] = 1] = "XBOX";
    Platform[Platform["PSP"] = 2] = "PSP";
    Platform[Platform["PS4"] = 3] = "PS4";
})(Platform || (Platform = {}));
var gamer = {
    name: 'Juveria',
    gamerTag: 'Juv',
    platform: Platform.PC
};
var Pet = /** @class */ (function () {
    function Pet(name) {
        this.name = name;
    }
    Pet.prototype.sleep = function (hours) {
        if (hours === void 0) { hours = 6; }
        console.log(this.name + " has slept for " + hours);
    };
    Pet.prototype.eat = function () {
        console.log(this.name + " is eating");
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sleep = function (hours) {
        if (hours === void 0) { hours = 7; }
        _super.prototype.sleep.call(this, hours);
    };
    Dog.prototype.bark = function () {
        console.log(this.name + " is barking");
    };
    return Dog;
}(Pet));
var lady = new Dog('Lady');
lady.bark();

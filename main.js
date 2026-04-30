"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "World";
console.log(message);
var isbeginner = true;
var total = 0;
var name = "Raghu";
var sentence = "My name is ".concat(name);
console.log(sentence);
var isNew = null;
var isName = undefined;
//Declaring Array type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//mixed contains both number 7 string - typescript provide tupil
var person1 = ["raghu", 22];
//enum type - Giving friendly name to set of numeric values
// enum we use the enum keyword and that is followed by a name for the enum which is in turn followed by the values in a pair of curly braces
var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["green"] = 11] = "green";
    Color[Color["yellow"] = 12] = "yellow";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
//any
var randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
//unknown
var myVariable = 10;
if (typeof myVariable === "string") {
    myVariable.toUpperCase();
}
//(myVariable as string).toUpperCase();
//(myVariable as number).toFixed();
//Type inference
var a;
a = 10;
a = true;
var b = 10;
//b=true; //type inference takes place when initializing variables and not all the time as we see in the right now type inference does not work on variable a where there is no initialization types are also necessary in other situations
//ability to specify union of types for the same variable
var multiType;
multiType = 20;
multiType = true;
//Functions***
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//optional parameters & default parameters
//TypeScript expects parameter to be passed to function, meanwhile javascript allows, so we have to use ? for
//treats num21 as undefined, but we have to declare first which has value[required] then which is undefined[optional] if we want
function addOne(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addOne(5, 10);
addOne(5);
//default parameter - it has value instead of undefined
function addTwo(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addTwo(5, 10); //15
addTwo(5); //15 - it takes by default
//Interfaces***
//To Specify an object as a type in typescript
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "bruce",
    lastName: "wayne",
};
fullName(p);
function fullNames(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
//Optional properties ? used in interface are useful in forms, if the specific field is not mandatory.
//***Class***
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Raghu");
console.log(emp1.employeeName);
emp1.greet();

var str = 'Hello Typescript';
var num = 42;
var isActiv = false;
var strArray = ['H', 'e', 'l'];
var numArray = [1, 1, 2, 3];
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
//
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
//any type
var notSure = 4;
//void type
function warnUser() {
    console.log("This is my warning message");
}
// null and undefined
var u = undefined;
var n = null;
//never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}

let str: string = 'Hello Typescript'
let num: number = 42
let isActiv: boolean = false

let strArray: string[] = ['H', 'e', 'l']
let numArray: Array<number> = [1, 1, 2, 3]

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
//
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;

//any type
let notSure: any = 4;

//void type
function warnUser(): void {
  console.log("This is my warning message");
}

// null and undefined
let u: undefined = undefined;
let n: null = null;

//never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}


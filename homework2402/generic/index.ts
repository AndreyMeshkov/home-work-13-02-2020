//const arr: Array<number> = [1, 2, 3, 4]

interface User {
  id: number
  name: string
  age: number
}

const users: Array<User> = [
  {id: 1, name: 'V', age: 2},
  {id: 23, name: 'E', age: 23}
]

const users2: User[] = [
  {id: 1, name: 'V', age: 2},
  {id: 23, name: 'E', age: 23}
]

//generic function
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

//generic clsses
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; }

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

//use extends
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'
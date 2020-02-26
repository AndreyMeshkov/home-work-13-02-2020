// let str: string = 'Hello Typescript'
// let num: number = 42
// let isActiv: boolean = false
//
// let strArray: string[] = ['H', 'e', 'l']
// let numArray: Array<number> = [1, 1, 2, 3]
//
// function logInfo(name: string, age: number): void {
//   console.log(`Info: ${name}, ${age}`)
// }
//
// logInfo('Andrey', 41)
//
// function  calc(a: number, b: number | string): number {
//   if (typeof b === 'string') b = +b
//   return a + b
// }
//
// console.log(calc(2, 5))
var Server = /** @class */ (function () {
    // constructor(name: string, ip: number) {
    //   this.name = name
    //   this.ip = ip
    // }
    // other variant
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        // public name: string
        // private ip: number
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 1234);

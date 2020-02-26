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

class Server {
  static VERSION = '1.0.3'

  // public name: string
  // private ip: number

  private status: string = 'working'

  // constructor(name: string, ip: number) {
  //   this.name = name
  //   this.ip = ip
  // }
  // other variant
  constructor(public name: string, protected ip: number) {
  }

  public turnOn() {
    this.status = 'working'
  }

  protected turnOff() {
    this.status = 'offline'
  }

  public getStatus(): string {
    return this.status
  }
}

const server: Server = new Server('AWS', 1234)
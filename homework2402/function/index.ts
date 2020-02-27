function logInfo(name: string, age: number): void {
  console.log(`Info: ${name}, ${age}`)
}

logInfo('Andrey', 41)

function  calc(a: number, b: number | string): number {
  if (typeof b === 'string') b = +b
  return a + b
}
console.log(calc(2, 5))

//сделать необязательным lastName
function buildName(firstName: string, lastName?: string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}

//параметры по умолчанию
function buildName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

//rest parameters(остаточные параметры)
function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName3;




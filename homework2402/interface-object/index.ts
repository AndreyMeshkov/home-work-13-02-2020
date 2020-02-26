interface UserInterface {
  name: string
  age: number
  logInfo: () => void
  id?: any
}

const user: UserInterface = {
  name: 'Andrey',
  age: 41,
  logInfo() {
    console.log(this.name + ' ' + this.age)
  }
}
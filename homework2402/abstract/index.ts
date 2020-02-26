abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; //  должен быть реализован в производном классе
}

class AccountingDepartment extends Department {

  constructor() {
    super("Accounting and Auditing"); // конструкторы в производных классах должны вызывать super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // окей, создана ссылка на абстрактный класс
//department = new Department(); // ошибка: cannot create an instance of an abstract class
department = new AccountingDepartment(); // окей, создан и присвоен не абстрактный класс
department.printName();
department.printMeeting();
//department.generateReports(); // ошибка: method doesn't exist on declared abstract type
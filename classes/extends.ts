class Personn {
  name: string;
  constructor(userName: string) {
    this.name = userName;
  }
  print(): void {
    console.log(`Имя: ${this.name}`);
  }
}

class Employee extends Personn {
  company: string;
  constructor(name: string, company: string) {
    super(name);
    this.company = company;
  }
  work(): void {
    console.log(`${this.name} работает в компании ${this.company}`);
  }
}

let bobe: Employee = new Employee('Bob', 'Microsoft');
bobe.work(); // Bob работает в компании Microsoft

// OVERRIDE
class Personnn {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  print(): void {
    console.log(`Имя: ${this.name}`);
  }
}

class Employeee extends Personnn {
  company: string;
  constructor(name: string, company: string) {
    super(name);
    this.company = company;
  }
  print(): void {
    console.log(`Имя: ${this.name}`);
    console.log(`Работает в компании: ${this.company}`);
  }
}

let bob: Employeee = new Employeee('Bob', 'Microsoft');
bob.print();

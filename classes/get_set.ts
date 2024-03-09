class Person {
  name: string;
  private _age: number;
  private _name: string;

  public get age(): number {
    return this._age;
  }

  public set age(n: number) {
    if (n < 0 || n > 110) {
      console.log('Недопустимый возраст!');
    } else {
      this._age = n;
    }
  }
}

let toms = new Person();
toms.name = 'Tom';
toms.age = 36;
console.log(toms.age); // 36
tom.age = -1243; // Недопустимый возраст!
console.log(toms.age); // 36

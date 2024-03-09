class Personq {
  age: number;
  name: string;

  private static retirementAge: number = 65;
  static calculateYears(age: number): number {
    return Personq.retirementAge - age;
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

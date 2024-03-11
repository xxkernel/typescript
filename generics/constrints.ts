function compareName<T extends { name: string }>(obj1: T, obj2: T): void {
  if (obj1.name === obj2.name) {
    console.log('Имена совпадают');
  } else {
    console.log('Имена различаются');
  }
}

class q {
  constructor(public name: string, public age: number) {}
}
let bob = new q('Bob', 38);
let bobic = new q('Bob', 24);
compareName<q>(bob, bobic);

type Person = { id: number; name: string };
let w: Person = { id: 1, name: 'Tom' };
let sam: Person = { id: 2, name: 'Sam' };
compareName<Person>(w, sam);

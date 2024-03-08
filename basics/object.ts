function greet(person: { name: string; age: number }) {
  return 'Hello ' + person.name;
}

// or they can be named by using either an interface:

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return 'Hello ' + person.name;
}

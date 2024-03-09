const header = document.getElementById('header') as HTMLElement;
header.innerText = 'Hello Typescript!';

let tomas = new Employee('Tom', 'Microsoft');
if (tomas instanceof Person) {
  console.log('Tom is a Person');
} else {
  console.log('Tom is not a Person');
}

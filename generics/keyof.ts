interface IUser {
  name: string;
  age: number;
}

type KeysOfUser = keyof IUser;

const key: KeysOfUser = 'age';

function getValue<T, K extends keyof T, S extends keyof T>(
  obj: T,
  name: K,
  age: S
) {
  console.log(`${obj[name]}, ${obj[age]}`);
}

const user: IUser = {
  name: 'Vanya',
  age: 30,
};

const userName = getValue(user, 'name', 'age');

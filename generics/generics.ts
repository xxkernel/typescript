function getId<T>(id: T): T {
  return id;
}
let result1 = getId<number>(5);
console.log(result1);
let result2 = getId<string>('abc');
console.log(result2);

class Users<T> {
  private _id: T;
  constructor(id: T) {
    this._id = id;
  }
  getId(): T {
    return this._id;
  }
}

let tom = new Users<number>(3);
console.log(tom.getId()); // возвращает number

let alice = new Users<string>('vsf');
console.log(alice.getId()); // возвращает string
interface IUser<T> {
  getId(): T;
}

class User<T> implements IUser<T> {
  private _id: T;
  constructor(id: T) {
    this._id = id;
  }
  getId(): T {
    return this._id;
  }
}

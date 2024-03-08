// Главное отличие unknown от any связано с проверкой типов. unknown запрещает выполнять любые операции:

let value: unknown = 'code-basics';

value.toUpperCase(); // Error!
value.trim(); // Error!

function isError(value: unknown): boolean {
  return value instanceof Error;
}
//   instanceof работает только с конструкторами, поэтому в примере выше мы проверяем, является ли значение экземпляром класса Error.

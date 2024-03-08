// const a = 1;
// const b = 2;
// let res: number = a + b;
// console.log(res);

//  Функция
// function getFullName(firstname: string, lastname: string): string {
//   return `${firstname} ${lastname}`;
// }
// function getFullName(firstname: string, lastname: string): string {
//   return `${firstname} ${lastname}`;
// }
// console.log(getFullName('John', 'Mike'));

//  Обьекты
// function getFullName(userEntity: {
//   firstname: string;
//   lastname: string;
// }): string {
//   return `${userEntity.firstname} ${userEntity.lastname}`;
// }
// const user = {
//   firstname: 'Akzhol',
//   lastname: 'Tasbay',
// };
// console.log(getFullName(user));

//  массив
// const skills: string[] = ['Dev', 'DevOps'];

// кортеж
// const skills: [number, string] = [1, 'Dev'];

//  enum
// enum statusCode {
//   SUCCESS = 1,
//   IN_PROCESS,
// }
// const res = {
//   message: 'Accepted',
//   status: statusCode.SUCCESS,
// };

//  union
// function logId(id: string | number | boolean) {
//   console.log(id);
// }

// literal types
// function fetchWithAuth(url: string, method: 'post' | 'get') {
//   console.log('1');
// }
// fetchWithAuth('hello', 'post');

//  type aliases
// type httpMethod = 'post' | 'get';
// function fetchWithAuth(url: string, method: httpMethod) {
//   console.log('1');
// }

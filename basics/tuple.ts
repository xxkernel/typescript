let user: [string, number] = ['Tom', 36];
console.log(user[1]); // 36
user[1] = 37;
console.log(user[1]); // 37

let bob: [string, number, boolean?] = ['Bob', 41, true];
// let tom: [string, number, boolean?] = ['Tom', 36];

let math: [string, ...number[]] = ['Math', 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ['Physics', 5, 5, 5];

let tom: [string, number, boolean] = ['Tom', 36, false];
let [username, userage, isMarried] = tom; // декомпозиция
console.log(username); // Tom
console.log(userage); // 36
console.log(isMarried); // false

function generateUser(): readonly [string, number] {
  return ['Sam', 18];
}

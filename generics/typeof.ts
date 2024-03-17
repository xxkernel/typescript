let strOrNum: string | number = 5;

if (Math.random() > 0.5) {
  strOrNum = 5;
} else {
  strOrNum = 'str';
}

if (typeof strOrNum === 'string') {
  console.log(strOrNum);
} else {
  console.log(strOrNum);
}

let str20rNum: typeof strOrNum;

enum Direction {
  UP,
  DOWN,
}
type d = keyof typeof Direction;

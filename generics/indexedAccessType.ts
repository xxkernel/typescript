type Cat = {
  name: string;
  age: number;
  hungry: boolean;
};

type Hungry = Cat['hungry']; // type Hungry = boolean
const isHungry: Hungry = true; // OK - `Hungry` is an alias for `boolean`

// The index can be a type, not just a literal:
type AgeProp = 'age';
type Age = Cat[AgeProp]; // type Age = number
const catAge: Age = 6; // OK - `Age` is an alias for `number`

type CatNames = Array<string>;

type CatName = CatNames[number]; // type CatName = string
const myCatsName: CatName = 'whiskers'; // OK - `CatName` is an alias for `string`

type Catq = {
  name: string;
  age: number;
  hungry: boolean;
  personality: {
    friendly: boolean;
    hungerLevel: number;
  };
};

type Friendly = Catq['personality']['friendly']; // type Friendly = boolean
const isFriendly: Friendly = true; // Pet the cat

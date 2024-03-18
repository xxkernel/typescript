type myFunction = (a: number, b: number) => number;

type ReturnValueFunction = ReturnType<myFunction>;
type MyParameters = Parameters<myFunction>;

class C {
  constructor(id: number, name: string) {}
}
type classConst = ConstructorParameters<typeof C>;

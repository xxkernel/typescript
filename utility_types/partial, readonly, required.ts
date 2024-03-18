type User = {
  id: number;
  name: string;
  userName?: string;
};

type RequiredUser = Required<User>;
type ReadOnlyUser = Readonly<User>;
type PartiolUser = Partial<User>;

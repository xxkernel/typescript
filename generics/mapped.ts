type User = {
  name: string;
  password: string;
  address: string;
  phone: string;
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type PartialUser = MyPartial<User>;

interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: 'Vasya',
  password: '123',
};

type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        errorMessage: string;
      };
};

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Error' },
};

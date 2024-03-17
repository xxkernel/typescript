type ToArray<T> = T extends any ? T[] : never;
type ExArray = ToArray<string>;

type ExtractIdType<T extends { id: string | number }> = T['id'];

interface NumericId {
  id: number;
}

interface StringId {
  id: string;
}

interface BooleanId {
  id: boolean;
}

type NumericIdType = ExtractIdType<NumericId>; // type NumericIdType = number
type StringIdType = ExtractIdType<StringId>; // type StringIdType = string
// type BooleanIdType = ExtractIdType<BooleanId>; // won't work

type ExtractIdTypee<T> = T extends { id: string | number } ? T['id'] : never;

interface NumericId {
  id: number;
}

interface StringId {
  id: string;
}

interface BooleanId {
  id: boolean;
}

type NumericIdTypee = ExtractIdTypee<NumericId>; // type NumericIdType = number
type StringIdTypee = ExtractIdTypee<StringId>; // type StringIdType = string
type BooleanIdTypee = ExtractIdTypee<BooleanId>; // type BooleanIdType = never

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;

// readonly_arrays.ts

let as: readonly number[] = [1, 2, 3];

let bs: readonly number[] = as.concat(4);

let three = bs[2];
as[4] = 5; // Index signature in type 'readonly number[]' only permits reading

as.push(6); // Property 'push' does not exist on type 'readonly number[]'

type A = readonly string[]; // readonly string[]
type B = ReadonlyArray<string>; // readonly string[]
type C = Readonly<string[]>; // readonly string[]

type D = readonly [number, string]; // readonly [number, string]
type E = Readonly<[number, string]>; // readonly [number, string]

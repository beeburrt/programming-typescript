// For each of these values, what type will TypeScript infer?

//  1)
// a.
let a = 1042; // number
// b.
let b = "apples and oranges"; // string
// c.
const c = "pineapples"; // "pineapples"
// d.
let d = [true, true, false]; // boolean[]
// e.
let e = { type: "ficus" }; // {type: string}
// f.
let f = [1, false]; // (number | boolean)[]
// g.
const g = [3]; // number[]
// h.
let h = null; // any

//  2)
//  Why do these throw the errors they throw?
// a.
let i: 3 = 3;
i = 4; // Because it was explicitly typed to 3function flip(f: Flippable) {
//   return "Flipped it!";
// }
// b.
let j = [1, 2, 3];
j.push(4);
j.push("5"); // Error = Argument of type 'string' is not assignable to parameter of type 'number'
// Because TypeScript infered the type to be number[], not (number | string)[] or anything else
// c.
let k: never = 4; // Error = Type 'number' is not assignable to type 'never'
// Because type never is for functions that don't ever return at all
// d.
let l: unknown = 4;
let m = l * 2; // Error = 'l' is of type 'unknown'
// ...

// arrays.ts

// Array<string> is same as string[]

let a = [1, 2, 3]; // number[]
var b = ["a", "b"]; // string[]
let c: string[] = ["a"];
let d = [1, "a"]; // (string | number)[]

d.map((_) => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  return _.toUpperCase();
});

const e = [2, "b"]; // (string | number)[]

let f = ["red"];
f.push("blue");
f.push(true); // Argument of type 'boolean' is not assignable to type 'string'

let g = []; // any[]
g.push(1); // number[]
g.push("red"); // (string | number)[]

let h: Array<number> = [];
h.push(1);
h.push("red"); // Argument of type 'string' is not assignable to parameter of type 'number'

function buildArray() {
  let a = []; // any[]
  a.push(1); // number[]
  a.push("x"); // (string | number)[]
  return a;
}

let myArray = buildArray();
myArray.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'

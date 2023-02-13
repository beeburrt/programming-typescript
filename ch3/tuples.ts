// tuples.ts

// Tuples have to be explicitly typed when declared

let a: [number] = [1];

let b: [string, string, number] = ["malcolm", "gladwell", 1963];

b = ["queen", "elizabeth", "ii", 1926]; // Type 'string' is not assignable to type 'number'

let trainfares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];

// same as above
let moreTrainfares: ([number] | [number, number])[] = [
  [3.75],
  [8.25, 7.7],
  [10.5],
];

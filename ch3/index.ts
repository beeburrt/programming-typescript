// let a = true;
// var b = false;
// const c = true;
// let d: boolean = true;
// let e: true = true;
// let f: true = false;

// let a: object = {
//   b: "x",
// };

// let a = {
// b: "x",
// };

// a.b;

// let b = {
//   c: {
//     d: 'f'
//   }
// }

let a: { b: number } = {
  b: 12,
};
a = {
  b: 1,
  c: 2,
};

let c: {
  firstname: string;
  lastname: string;
} = {
  firstname: "john",
  lastname: "barrowman",
};

class Person {
  constructor(public firstname: string, public lastname: string) {}
}
c = new Person("matt", "smith");

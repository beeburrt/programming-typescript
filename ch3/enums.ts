// enums.ts

const enum Language {
  English = 0,
  Spanish = 1,
}

enum Language {
  Russian = 2,
}

let myFirstLanguage = Language.English;

enum Color {
  Red = "#c10000",
  Blue = "#007ac1",
}

let red = Color["Red"];
let blue = Color["Blue"];

// const enum Flippable {
//   Burger,
//   Chair,
//   Cup,
//   Skateboard,
//   Table,
// }

// function flip(f: Flippable) {
//   return "Flipped it!";
// }

flip(Flippable.Chair);
flip(Flippable.Cup);
flip(12); // This works !!! (all numbers are assignable to enums)
// fix it like this:
const enum Flippable {
  Burger = "Burger",
  Chair = "Chair",
  Cup = "Cup",
  Skateboard = "Skateboard",
  Table = "Table",
}

function flip(f: Flippable) {
  return "Flipped it!";
}

flip(Flippable.Chair);
flip(Flippable.Cup);
flip("Hat"); // Argument of type 'Hat' is not assignable to parameter of type 'Flippable'

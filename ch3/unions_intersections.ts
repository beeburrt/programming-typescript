// unions_intersections.ts

type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };

type CatOrDogOrBoth = Cat | Dog;

type CatAndDog = Cat & Dog;

let a: CatOrDogOrBoth = {
  name: "Bonkers",
  purrs: true,
};
a = {
  name: "Domino",
  barks: true,
  wags: true,
};
a = {
  name: "Donkers",
  barks: true,
  purrs: true,
  wags: true,
};

let b: CatAndDog = {
  name: "Domino",
  barks: true,
  purrs: true,
  wags: true,
};

type Returns = string | null;

function trueOrNull(isTrue: boolean) {
  if (isTrue) {
    return "true";
  }
  return null;
}

function(a: string, b: number) {
  return a || b;
}

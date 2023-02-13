// null_undefined_void_never.ts

function a(x: number) {
  // function a(x: number): number | null
  if (x < 10) {
    return x;
  }
  return null;
}

function b() {
  // function b(): undefined
  return undefined;
}

function c() {
  // function c(): void
  let a = 2 + 2;
  let b = a * a;
}

function d() {
  // function d(): void
  throw TypeError("I always error");
}

function e() {
  // function e(): void
  while (true) {
    doSomething();
  }
}

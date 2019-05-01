//import "allocator/tlsf";
import "allocator/arena";

export { memory };

export function say(hello: string): string {
  return hello + " world"
}

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function addary(): Int8Array {
  let array: Int8Array = new Int8Array(5);
  array[0] = 99;
  array[1] = 88;
  array[2] = 77;
  array[3] = 66;
  array[4] = 55;
  return array;
}

export function addary2(arrayIn: Int8Array): Int8Array {
  let array: Int8Array = new Int8Array(5);
  array[0] = arrayIn[0] + 5;
  array[1] = arrayIn[1] + 5;
  array[2] = arrayIn[2] + 5;
  array[3] = arrayIn[3] + 5;
  array[4] = arrayIn[4] + 5;
  return array;
}


export function teste(): string {
  let x = "ZZZZZZZZZZZZ"
  return x;
}

export class X {
  teste(): String {
    return "Aew";
  }
}


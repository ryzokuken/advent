import * as fs from "fs";
import * as path from "path";

function readInput() {
  return fs
    .readFileSync(path.join(process.cwd(), "input.txt"))
    .toString()
    .split("\n")
    .map(Number)
    .slice(0, -1);
}

function calculateFuel(input) {
  return Math.floor(input / 3) - 2;
}

console.log(
  readInput()
    .map(calculateFuel)
    .reduce((acc, fuel) => acc + fuel, 0)
);

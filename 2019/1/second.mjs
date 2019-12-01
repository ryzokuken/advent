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

function calculateMass(input) {
  const fuel = calculateFuel(input);
  if (fuel <= 0) {
    return 0;
  } else {
    return fuel + calculateMass(fuel);
  }
}

console.log(
  readInput()
    .map(calculateMass)
    .reduce((acc, fuel) => acc + fuel, 0)
);

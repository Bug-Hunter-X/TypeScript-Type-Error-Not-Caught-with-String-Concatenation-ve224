function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    throw new Error('Inputs must be numbers');
  }
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe(1, "2"); // Throws an error at runtime because of explicit type checking
console.log(result1); // Output: 3
//console.log(result2); // Throws an error: Inputs must be numbers
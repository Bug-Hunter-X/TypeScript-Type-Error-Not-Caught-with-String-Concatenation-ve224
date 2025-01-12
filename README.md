# TypeScript Type Error Not Caught with String Concatenation

This example demonstrates a scenario where TypeScript's type system fails to catch type errors during compilation when string concatenation is used instead of intended numerical addition within function arguments. This can lead to unexpected runtime behavior. The issue is highlighted by the implicit type coercion in JavaScript, where a number and string can be concatenated, while mathematically adding them requires explicit type checking.

## Bug Description

The `add` function is defined to accept two numbers and return their sum. However, the call `add(1, "2")` passes a number and a string, resulting in string concatenation instead of numerical addition. TypeScript does not flag this as a type error during compilation.

## Solution

The solution involves explicit type checking using type guards or conditional type assertions to ensure that both inputs are indeed numbers. By explicitly enforcing type checks before performing the addition, the function's correctness is ensured and the potential runtime error is prevented during compilation.
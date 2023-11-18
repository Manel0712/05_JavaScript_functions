import isTypeOf from "./isTypeOf.js";
console.log(isTypeOf("Name", "string"));
console.log(isTypeOf(2, "number"));
console.log(isTypeOf(true, "boolean"));
console.log(isTypeOf([10, 20, 30], "array"));
console.log(isTypeOf("10", "number"));

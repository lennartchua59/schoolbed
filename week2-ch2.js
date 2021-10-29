let f = require("./formula")

console.log("mulitply 5x 3 = " + f.mul(5, 3))
console.log("add 4x 6 = " + f.add(4, 6))

// -- 2nd demo using object as exports
let h = require("./hero")
// use function in the object
h.fly()
let f = require("./formula")

console.log("mulitply 5x 3 = " + f.mul(5, 3))
console.log("add 4x 6 = " + f.add(4, 6))

// -- 2nd demo using object as exports
let h = require("./hero")
// use function in the object
h.fly()
h.xrayVision(999)
h.kenahit(10000)

let f2 = require("./formula2")
console.log(f2.multiply(2,3))
//-- call mulitply and provide a callback
f2.multiply(2, 3, //-- a, b
    (error, result)=>{ //-- callback
        if(error){
            console.log(error)

        }else if(result){
            console.log( "the result is " + result)

        }

    }
)

f2.multiply(Infinity, 3, //-- a,b
    (error, result)=>{ //-- callback
        if(error){
            
        }
    }
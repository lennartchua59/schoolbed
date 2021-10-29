// function in this file
// const to fix this code in function. no more changes
const f = {
    multiply : (a, b, callback) => {
    // -- if a or b is infinite then show error
    if(a == Infinity || b == Infinity){
        // set a timeout after 2 seconds
        setTimeout( //-- fake a delay 
            ()=>{ //-- handler to run timeout
                //-- call the callback function with 2 parameters
                callback(new Error("values cannot be infinite"), null),
                
            },
            2000 //-- 2000 millisec
        )
    }
    else{ //-- assume no more error
        setTimeout(
            // handler
            () => {
                // callback function with 2 parameters.
                // no error, with results
                callback(null, a*b)
            },
            // duration
            2000
        )
    }
    

    
}

module.exports = f
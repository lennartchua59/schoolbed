const superherom = { //-- using curly brace. it's an object
    // define a function called fly,
    fly :() => {
        console.log("flying...")
    }, //-- comma to separate functions to variable/attributes/propeties

    xrayVision: (depth) => {
        console.log("i can see thru this depth of " + depth)
    },
    life:99, //-- test a variable
    //-- careful. bad coding practice.
    kenahit:(damage) => {
        console.log("my life is still " + life + " even with damage: " + damage)
    }

}

module.export = superhero 
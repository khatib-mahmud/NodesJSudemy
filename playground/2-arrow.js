// const square = (x) =>{
//     return x*x;
// }

const { formatWithOptions } = require("util");


// const square = (x)=> x*x

// console.log(square(23));

const event= {
    name : 'pokemon',
    guestList:['Bolbasour', 'Pickachu', 'Charmelion' ],
    printGuestList(){
        console.log("Guest list for "+ this.name);
        this.guestList.forEach( x=>{
            console.log(x +"is ulta"+ this.name);
        })
    }
}

event.printGuestList()

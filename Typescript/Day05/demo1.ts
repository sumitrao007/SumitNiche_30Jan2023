//Optional parameter functions

function add1(a:number,b?:number){
    console.log("Value of a "+a);//7
    console.log("Value of b "+b);//undefined
    console.log("Value of a+b "+(a+b!));//NAN=> not a number 
}
// add1(7);
function add2(a?:number,b?:number){
    console.log("Value of a "+a);//7
    console.log("Value of b "+b);//undefined
    console.log("Value of a+b "+(a!+b!));//NAN=> not a number 
}

// add2();

//default parameter functions

function add3(a:number,b:number=10){
    console.log("Value of a "+a);//7
    console.log("Value of b "+b);//undefined
    console.log("Value of a+b "+(a!+b!));//NAN=> not a number 
}

// add3(8);

function add4(a:number=11,b:number){
    console.log("Value of a "+a);//7
    console.log("Value of b "+b);//undefined
    console.log("Value of a+b "+(a!+b!));//NAN=> not a number 
}

// add4(20,7);

function add5(a:number=11,b?:number){
    console.log("Value of a "+a);//11
    console.log("Value of b "+b);//undefined
    console.log("Value of a+b "+(a!+b!));//NAN=> not a number 
}

add5();


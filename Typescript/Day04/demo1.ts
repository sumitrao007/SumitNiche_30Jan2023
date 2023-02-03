//Anonymous Functions
// function does not have any name 

let temp=function (){
    console.log("Anonymous Functions is called ");
}  

    // temp();

let temp1=function (a:number,b:number):number{
    return (a+b);
}

    // let res=temp1(4,5);
    // console.log("Result is "+res);

// Fat arrow function/ Arrow function
// Advnaced version of Anonymous Functions

  let temp2= ()=>{
        console.log("Fat Arrow function is called");
    }
    // temp2();

    let temp3=(a:number,b:number):number=>{
        return (a+b);
    }

    let res1=temp3(10,2);
    console.log(res1);



//Anonymous Functions
// function does not have any name 
var temp = function () {
    console.log("Anonymous Functions is called ");
};
// temp();
var temp1 = function (a, b) {
    return (a + b);
};
// let res=temp1(4,5);
// console.log("Result is "+res);
// Fat arrow function/ Arrow function
// Advnaced version of Anonymous Functions
var temp2 = function () {
    console.log("Fat Arrow function is called");
};
// temp2();
var temp3 = function (a, b) {
    return (a + b);
};
var res1 = temp3(10, 2);
console.log(res1);

//basics of array
// array is growable & shrinkable dynamically
//no any fixed size of array 
//array will be homogenous or hetrogenous 
var a = [7, 8, 9, 10];
var a1 = [];
var a2 = [2.5, 'sumit'];
var a3 = [2.5, 'Sumit', true];
var str = ['Sumit', 'Vishwaraj', 'Ganesh', 'Ashish', 'Mahesh'];
// for(let i=0;i<a.length;i++){
//     console.log("value => "+a[i]);
// }
var str1;
// console.log(a);
// console.log(a.join(" - "))
// console.log(a.join());
// console.log(a.join(str1));
//foeeach => it is apply on array
// a.forEach((myvalue,i)=>{
//     console.log(myvalue+" index is "+i);
// })
//rest parameter functions
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item);
}
// display(10,45,88);
// display(100);
function display1(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(item);
    console.log(str);
}
// display1("Sumit",78,99);
//push & pop
// u can add data dynamically into the array
//LIFO=> Last in frist out 
var a4 = [];
a4.push(77);
console.log(a4);
a4.push(100, 45, 56, 32);
console.log(a4);
var res = a4.pop();
console.log(a4);
console.log("Poped value is " + res);

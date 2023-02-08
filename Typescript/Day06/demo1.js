//Splice method
// dynamically add data into array 
//u can add a particular index data 
var a = [10, 52, 63, 74, 12];
// console.log(a);
// a.splice(2,0,99);
// console.log(a);
// a.splice(1,0,80,100);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(2,1,500);
// console.log(a);
//slice
// It copy a section of data & return a new array 
var str = ['.net', 'C#', 'ADO', 'Jquery', 'Javascript', 'Ajax', 'Angular 12', 'AWS'];
// let temp=str.slice(1,6);
// console.log("Original Array "+str);
// console.log("Copied array "+temp);
// let temp2=str.slice(1);
// console.log("Copied array "+temp2);
//map
// element by element operation 
var c = [2, 3, 4, 5, 6];
var res = c.map(function (myvalue) {
    return (myvalue * myvalue);
});
console.log(c);
console.log(res);

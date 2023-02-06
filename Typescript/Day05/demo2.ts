//basics of array
// array is growable & shrinkable dynamically
//no any fixed size of array 
//array will be homogenous or hetrogenous 

let a:number[]=[7,8,9,10];
let a1:number[]=[];
let a2=[2.5,'sumit'];
let a3:any[]=[2.5,'Sumit',true];
let str=['Sumit','Vishwaraj','Ganesh','Ashish','Mahesh'];

// for(let i=0;i<a.length;i++){
//     console.log("value => "+a[i]);

// }

let str1!:string;
// console.log(a);
// console.log(a.join(" - "))
// console.log(a.join());
// console.log(a.join(str1));

//foeeach => it is apply on array

// a.forEach((myvalue,i)=>{
//     console.log(myvalue+" index is "+i);
// })

//rest parameter functions

function display(...item:number[]){
    console.log(item)
}

// display(10,45,88);
// display(100);

function display1(str:string,...item:number[]){
    console.log(item)
    console.log(str);
}

// display1("Sumit",78,99);

//push & pop
// u can add data dynamically into the array
//LIFO=> Last in frist out 
let a4:number[]=[];
a4.push(77);
console.log(a4);
a4.push(100,45,56,32);
console.log(a4);
let res=a4.pop();
console.log(a4);
console.log("Poped value is "+res);









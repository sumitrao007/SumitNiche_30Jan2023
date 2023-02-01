//Type assertion
// pre-requiest=> any/unknown/object 
// 
var a;
// a.
// 1 Angle bracket
// typescript file 
var temp = a;
// temp.
// 2 as syntax
// ts file as well as html file 
var temp1 = a;
// temp1.
//Operators
// Airthamthic=> +,-,*,/,%
//logical => &&,||
//bitwise => !,~,^,&,|,<<,>>
//relational => <,>,
//conditional => <=,>=,!=,==(it checks only value),===(strongly equality => it checks value as well as data type )
//ternary=> condition?expression1:expression2
//unary => post/pre inc/dec ++a,a--
//Assignment => =,+=,-=,/=,*=,%=
//control statement
// if-else,if-else if ,switch,break,continue
var rating = 21;
// if (rating<4){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is false");
// }
var choice = 21;
// switch(choice){
//     case 1:console.log("U r in case 1")
//         break;
//     case 2: console.log("U r in case 2")
//         break;
//     default:console.log("U r in default case ");
//         break;
// }
//loop statement
// while,do-while,for,foreach
var count = 5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }
// do{
//     console.log("====Count is "+count);
//             count--;
// }while(count!=0)
// for
// for(var i=0;i<5;i++){
//     console.log("value of i is "+i)
// }
// console.log("i value after loop "+i);
//var => it is global scope
// let => to create variable 
// scope => within nearest block
for (var i = 0; i < 5; i++) {
    console.log("value of i is " + i);
}
// console.log("i value after loop "+i);
//const => u can't change the value of variable once u assign 
//scope => global as well as local 
var pi = 3.14;

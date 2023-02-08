//json object
// java script Object Notation
// Key & value  format data 
let jsonObj={
    id:9,
    "fname":'Sumit',
    lname:'Raokhande'
}

//1 dot operator
//2 Square Operator

//1 dot operator

// console.log(`
// ---------Json Object using Dot Operator---------
//     ID         :: ${jsonObj.id}
//     First Name :: ${jsonObj.fname}
//     Last Name  :: ${jsonObj.lname}
// `);

//2 Square Operator
// console.log(`
// ---------Json Object using Square Operator---------
//     ID         :: ${jsonObj["id"]}
//     First Name :: ${jsonObj['fname']}
//     Last Name  :: ${jsonObj["lname"]}
// `);

//Array Of Object 

let arrObj=[
    {
        id:9,
        "fname":'Sumit',
        lname:'Raokhande',
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan",'May','Dec'],
        result:[
            {
                subj:'M1',
                marks:40
            },
            {
                subj:'M2',
                marks:45
            },
            {
                subj:'M3',
                marks:55
            }
        ]
    },
    {
        id:3,
        "fname":'Spruha',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'US'
        },
        month:["Feb",'July','Nov'],
        result:[
            {
                subj:'M1',
                marks:45
            },
            {
                subj:'M2',
                marks:55
            },
            {
                subj:'M3',
                marks:65
            }
        ]
    },
    {
        id:6,
        "fname":'Kiran',
        lname:'Raokhande',
        country:{
            cid:3,
            cname:'Japan'
        },
        month:["March",'Aug','Oct'],
        result:[
            {
                subj:'M1',
                marks:50
            },
            {
                subj:'M2',
                marks:75
            },
            {
                subj:'M3',
                marks:85
            }
        ]
    }
];

for(let i=0;i<arrObj.length;i++){
    console.log(`
           ID           :: ${arrObj[i].id} 
           First Name   :: ${arrObj[i].fname}
           Last Name    :: ${arrObj[i].lname}
           Country Name :: ${arrObj[i].country.cname}
           Month        :: ${arrObj[i].month.join("  ")}
    `)

    // for(let j=0;j<arrObj[i].result.length;j++){
    //     console.log(`
    //         -----------Result-------------
    //             Subject :: ${arrObj[i].result[j].subj}
    //             Marks   :: ${arrObj[i].result[j].marks}
    //     `)
    // }

    arrObj[i].result.forEach((value)=>{
            console.log(`
                ----------Result-------------
                    Subject :: ${value.subj}
                    Marks   :: ${value.marks}
            `)
    })

}

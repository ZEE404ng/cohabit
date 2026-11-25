// Sample data for the prototype. Replace with a database or API later.
// Listings without a city (c) default to Lagos.
var AREAS={Lagos:["Yaba","Surulere","Ikeja","Lekki","Ajah","Maryland","Gbagada","Ikorodu"],Abuja:["Wuse 2","Garki","Maitama","Gwarinpa","Jabi","Kubwa","Lugbe","Asokoro"]};
var LISTINGS=[
{t:"Double room in a 3-bed flat",a:"Yaba",p:650000,v:1,who:"Two flatmates, both working",tags:["Power: prepaid meter","No smoking","Quiet after 10pm"]},
{t:"Self-contained room with shared kitchen",a:"Surulere",p:480000,v:0,who:"One flatmate, student",tags:["Borehole water","Guests on weekends"]},
{t:"Master room, ensuite",a:"Lekki",p:1800000,v:1,who:"Two flatmates, remote workers",tags:["Generator backup","Cleaner weekly","No pets"]},
{t:"Room in a 2-bed flat",a:"Ikeja",p:720000,v:1,who:"One flatmate, nurse on shifts",tags:["Quiet house","Near Allen Avenue"]},
{t:"Shared room, 2 people",a:"Gbagada",p:350000,v:0,who:"Looking for same-gender share",tags:["Water included","Lower rent"]},
{t:"Single room in a duplex",a:"Maryland",p:900000,v:0,who:"Three flatmates, 20s",tags:["Pets allowed","Social house"]},
{t:"Spacious room with balcony",a:"Ajah",p:1100000,v:1,who:"One flatmate, entrepreneur",tags:["Estate security","Parking"]},
{t:"Room near the lagoon road",a:"Ikorodu",p:300000,v:0,who:"Two flatmates",tags:["Budget friendly","Longer commute"]},
{c:"Abuja",t:"Master room in a 3-bed flat",a:"Wuse 2",p:1400000,v:1,who:"Two flatmates, both working",tags:["Prepaid meter","No smoking","Near Wuse Market"]},
{c:"Abuja",t:"Room in a 2-bed flat",a:"Garki",p:750000,v:0,who:"One flatmate, civil servant",tags:["Borehole water","Quiet house"]},
{c:"Abuja",t:"Ensuite room in a shared house",a:"Maitama",p:2200000,v:1,who:"Two flatmates, diplomats’ staff",tags:["Cleaner weekly","Generator backup","No pets"]},
{c:"Abuja",t:"Double room with shared kitchen",a:"Gwarinpa",p:900000,v:1,who:"Two flatmates, 20s",tags:["Estate security","Guests on weekends"]},
{c:"Abuja",t:"Room near the Jabi Lake",a:"Jabi",p:1300000,v:0,who:"One flatmate, remote worker",tags:["Fast internet","Quiet after 10pm"]},
{c:"Abuja",t:"Single room, shared bathroom",a:"Kubwa",p:380000,v:0,who:"Three flatmates",tags:["Budget friendly","Longer commute"]},
{c:"Abuja",t:"NYSC-friendly room",a:"Lugbe",p:450000,v:1,who:"Two corps members",tags:["Water included","Near the airport road"]},
{c:"Abuja",t:"Spacious room with parking",a:"Asokoro",p:1900000,v:1,who:"One flatmate, entrepreneur",tags:["Estate security","Parking","Pets allowed"]}
];

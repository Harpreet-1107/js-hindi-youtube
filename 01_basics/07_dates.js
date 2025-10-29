//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);//object interview question

let myCreatedDate = new Date(2025, 11, 16)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2025, 0, 24, 5 , 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-01-15");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//in miliseconds 

console.log(Math.floor(Date.now()/1000)); // to get value in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday:"long",
})

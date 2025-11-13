// singleton
//object.create

//object literals

const mySym = Symbol("key1")//defining symbol data type


const JsUser = {
    name: "Harpreet",
    "full name":"Harpreet Kour",
    [mySym]:"mykey1",// declaration of symbol (ask in interviews)
    age : 18,
    email: "harpreet@hmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "harpreet@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "harpreet1122@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
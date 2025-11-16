function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("T");
}

//sayMyName()

// function addTwoNumbers(num1, num2){ //parameter(inside)
//    console.log(num1 + num2);
// }

// addTwoNumbers(3,5) //arguments (inside)

function addTwoNumbers(num1, num2){ //parameter(inside)
//    let result = num1 + num2
//    return result
      return num1 + num2
}

const result = addTwoNumbers(3,5) //arguments (inside)

console.log("Result: ", result);

function loginUserMessage(username = "sammy"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return`${username} just loggged in`
}

 console.log(loginUserMessage("harpreet"))
 console.log(loginUserMessage())

 // lecture 20
                              // rest operator...num1
 function calculateCartPrice(...num1){
    return num1;
 }

 console.log(calculateCartPrice(200,300,2000,231,323))

 const user = {
    username: "harpreet",
    price: 199
 }
 
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }

//  handleObject(user)
handleObject({
    username: "sammy",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,284,24,232,4323]));
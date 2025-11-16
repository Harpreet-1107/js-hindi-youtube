let a = 300



if(true){
let a = 10
const b = 20
var c = 30
//console.log("INNER: ",a);
}


//console.log(a);
//console.log(b);
//console.log(c);


//lecture no 22

function one(){
    const username = "harpreet"

    function two(){
        const website = "youtube"
        console.log(username);
    }
  // console.log(website);
    

  //child function can access the variable of parent function
   two()

}

//one()


 if(true){
    const username = "harpreet"
    if(username === "harpreet"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);    // out of the scope and gives error

 } 

 //console.log(username);   // out of the scope and gives error


 //++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++
   

 console.log(addone(5))

 function addone(num){
    return num + 1
 }

  console.log(addTwo(5))
 const addTwo = function(num){
    return num + 2
 }

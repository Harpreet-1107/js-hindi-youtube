const accountId = 14432
let accountEmail = "harpreet@2005.com"
var accountPassword = "12345"
accountCity = "Jharkhand"
let accountState;

// accountId = 12 // it is not allowed to change the value of const keyword

accountEmail ="abcd@gmail.com"
accountPassword = "11223344"
accountCity = "begaluru"

console.log(accountId)

/*
prefer not to use var
beacuse of issues in block scope and functional scope
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

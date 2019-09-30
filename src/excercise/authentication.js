const userName = "Bill" 
const passWord = "helloWorld" //defining the credentials

const authentication = function(name, password){ 
    if(typeof name !== "string" || typeof password !== "string"){ // if either of the two imputs are not string
        console.log("please type in a string for user name and pass word") // give some hints to users
        return false
    } // handle errors; flow control
    if(userName.toLowerCase()===name.toLowerCase()){ // "name" doesn't have to be case-sensitive
        if(password===passWord){ // "password" needs to match with credentials exactly
            return true
        } else { // don't forget the else or will return undefined if imputs ain't correctt
            return "please enter the correct user name and password!"
        }
    } 
} //setting up the authentication function

console.log(authentication("BIll","HelloWorld")) // checking


var credentials = {
    username: "Bill",
    password: "Zhang"
} // setting defaults with objects

const compare =  function(compareFrom, compareTo, caseSensitive){
    let v1, v2 // because the v1, v2 should be changeable, we use "let"
    
    if(caseSensitive){ //case-sensitive
        v1=compareFrom // reassign it's value
        v2=compareTo
    } else { //not case-sensitive
        v1 = compareFrom.toLowerCase()
        v2 = compareTo.toLowerCase()
    }

    return v1 === v2 // writing a if ... else ... statement is basically dealing with booleans, therefor it is more sensible to do this
} // reusable piece of code can be turned into a function

const login = function(username, password){
    if (typeof unsername !== "string" || typeof password !== "string" ){
        console.log('please enter a user name and a password')
        return false
    } // handling errors at the top

    const checkUsername = compare(username,credentials.username) // false has been omitted
    const checkPassword = compare(password,credentials.password, true) // using the function

    return checkUsername && checkPassword // both checkUsername and checkPassword are booleans, if both true return true
}

console.log(login('bill',"Zhang")) // true
console.log(login('bill',"zhang")) // false
console.log(login('Bill',"Zhang")) // true


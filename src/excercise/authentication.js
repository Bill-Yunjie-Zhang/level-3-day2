// const userName = "Bill"
// const passWord = "helloWorld"

// const authentication = function(name, password){
//     if(typeof name !== "string" || typeof password !== "string"){
//         console.log("please type in a string for user name and pass word")
//         return false
//     }
//     if(userName.toLowerCase()===name.toLowerCase()){
//         if(password===passWord){
//             return true
//         } else {
//             return "please enter the correct user name and password!"
//         }
//     } 
// }

// console.log(authentication("BIll","HelloWorld"))


var credentials = {
    username: "Bill",
    password: "Zhang"
}

const compare =  function(compareFrom, compareTo, caseSensitive){
    let v1, v2
    
    if(caseSensitive){
        v1=compareFrom
        v2=compareTo
    } else {
        v1 = compareFrom.toLowerCase()
        v2 = compareTo.toLowerCase()
    }

    return v1 === v2
}

const login = function(username, password){
    if (typeof unsername !== "string" || typeof password !== "string" ){
        console.log('please enter a user name and a password')
        return false
    }

    const checkUsername = compare(username,credentials.username)
    const checkPassword = compare(password,credentials.password, true)

    return checkUsername && checkPassword
}

console.log(login('bill',"Zhang")) // true
console.log(login('bill',"zhang")) // false
console.log(login('Bill',"Zhang")) // true


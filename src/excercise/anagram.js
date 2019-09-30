var anagram = function(x){

    var string1 = ""
    if(typeof x === "string"){
        var string1 = x
    } else{
        console.log("please return a string")
        return false
    } // controlling the flow
      // my logic is that if it's not a string I won't bother to assign it to the variable I will use below

    var lowerCaseString1 = string1.toLowerCase() // making it not case-sensitive
    var lowerCaseArray1 = lowerCaseString1.split("") // plit the lowercase string in to an array
    // console.log(a1) // checking while coding
    // var la2 = [] 
    // for(ii=0; ii<ls1.length; ii++){
    //     la2.unshift(la1[ii])
    // } // I need to check methods more, I litterally build a reverse method
    // // console.log(a2)
    var lowerCaseArray2 = lowerCaseArray1.reverse() // the most efficient way of reversing an array
    var lowerCaseString2 = lowerCaseArray2.join("") // put the array back into a string
    // console.log(ls2) // checking
    
    return lowerCaseString2 === lowerCaseString1 
    // if(lowerCaseString2 === lowerCaseString1){
    //     return true
    // } else {
    //     return false
    // } // not a very code saving way to do this
}

console.log(anagram(1)) // checking



var isAnagram2 = function(word){
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('') // needs to be very familiar with the methods
}
console.log(isAnagram2('Level'))

var anagram = function(x){

    var string1 = ""
    if(typeof x === "string"){
        var string1 = x
    } else{
        console.log("please return a string")
        return false
    }

    var lowerCaseString1 = string1.toLowerCase()
    var lowerCaseArray1 = lowerCaseString1.split("")
    // console.log(a1)
    // var la2 = []
    // for(ii=0; ii<ls1.length; ii++){
    //     la2.unshift(la1[ii])
    // }
    // // console.log(a2)
    var lowerCaseArray2 = lowerCaseArray1.reverse()
    var lowerCaseString2 = lowerCaseArray2.join("")
    // console.log(ls2)
    
    return lowerCaseString2 === lowerCaseString1
    // if(lowerCaseString2 === lowerCaseString1){
    //     return true
    // } else {
    //     return false
    // }
}

console.log(anagram(1))



// var isAnagram2 = function(word){
//     return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
// }
// console.log(isAnagram2('Level'))

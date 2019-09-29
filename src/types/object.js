// var isString = function(x){
//     var test = x
//     var string1 = x.toString()
//     return test === string1
// }

var isString = function(x){
    var type = typeof(x)
    return type === "string"
}

console.log(isString(1))

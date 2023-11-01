/**
 * =========== Encapsulation ============
 */

// Traditional function
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function sum(a, b){
    return a + b
}

// IIFE function
(function(){
    let a = 10
    let b = 20
    let result = sum(a, b)
    console.log(result)
})


let autoIncrement = (function() {
    let number = 0

    return function () {
     number++
     return number
    }
})()

console.log(autoIncrement());
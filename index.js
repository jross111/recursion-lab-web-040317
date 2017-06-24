// Code your solution here!

function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length)
    printString(mySubstring)
  } else {
    return true
  }
}


function reverseString(str){
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)
}


// function isPalendrome(str){
//   return str === reverseString(str)
// }

function isPalindrome(str){
  let strLength = str.length
    if
      (strLength == 0 || strLength == 1){
        return true
  } if
    (str[0] === str[strLength - 1]) {
      return isPalindrome( str.slice(1, strLength - 1) )
    }
    return false
}

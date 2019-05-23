// ================================================================================================
//
//      Filename: exampleReturn.js
//
//      Discription:
//      Calls the bake fuintion to return the message into the variable.
//
//      Lessons learned:
//      Learning how to use the return function within Javascript.
//      The variable status calls the function bake with the argument 350.
//      The loops then determine which message to set.
//      The message is then returned into the variable which is printed into the console.
//
//
//      Version: 1.0
//      Create Date: 19.05.2019
//      Revision: 1
//
//      Known Bugs:
//
//      Author: Marcel-Christian Dueerkop
// ================================================================================================

function bake (degrees) {
  var message

  if (degrees > 500) {
    message = "I'm not a nuclear reactor!"
  } else if (degrees < 100) {
    message = "I'm not a refrigerator!"
  } else {
    message = "That's a very comfortable temperature for me."
    // setMode('bake')
    // setTemp(degrees)
  }
  return message
}

var status = bake(350)
console.log(status)

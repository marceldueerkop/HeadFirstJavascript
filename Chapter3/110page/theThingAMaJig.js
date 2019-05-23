/* eslint-disable eqeqeq */
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

function clunk (times) {
  var num = times
  while (num > 0) {
    display('clunk')
    num = num - 1
  }
}

function thingamajig (size) {
  var facky = 1
  clunkCounter = 0
  if (size == 0) {
    display('clank')
  } else if (size == 1) {
    display('thunk')
  } else {
    while (size > 1) {
      facky = facky * size
      size = size - 1
    }
    clunk(facky)
  }
}

function display (output) {
  console.log(output)
  clunkCounter = clunkCounter + 1
}
var clunkCounter = 0
thingamajig(0)
console.log(clunkCounter)
thingamajig(1)
console.log(clunkCounter)
thingamajig(2)
console.log(clunkCounter)
thingamajig(3)
console.log(clunkCounter)
thingamajig(4)
console.log(clunkCounter)
thingamajig(5)
console.log(clunkCounter)

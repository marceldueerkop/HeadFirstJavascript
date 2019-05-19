// ================================================================================================
//
//      Filename: dogFunction.js
//
//      Discription:
//      Creates a funtion to identify if the dog has a loud bark according to his weight.
//
//      Lessons learned:
//
//      Version: 1.0
//      Create Date: 19.05.2019
//      Revision: 1
//
//      Known Bugs:
//
//      Author: Marcel-Christian Dueerkop
// ================================================================================================

function bark (name, weight) {
  if (weight > 20) {
    console.log(name + ' says WOOF WOOF')
  } else {
    console.log(name + ' says woof woof')
  }
}

bark('rover', 23)
bark('spot', 13)
bark('spike', 53)
bark('lady', 17)
bark('blacky', 25)
bark('leslie', 30)
bark('dino', 0, 0)
bark('juno', 20)
bark('fido', '20')

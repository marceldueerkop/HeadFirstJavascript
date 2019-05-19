// ================================================================================================
//
//      Filename: whatCloths.js
//
//      Discription:
//      Function that evaluates the tempreture and reccomends the cloth to wear.
//
//      Lessons learned:
//      Piecing the code togehter from magents on a fridge in book.
//      The correct loop sturcture is important to give the correct reccomendation.
//
//      Version: 1.0
//      Create Date: 19.05.2019
//      Revision: 1
//
//      Known Bugs:
//
//      Author: Marcel-Christian Dueerkop
// ================================================================================================

function whatSahllIWear (temp) {
  if (temp < 60) {
    console.log('Wear a jacket')
  } else if (temp < 70) {
    console.log('Wear a sweater')
  } else {
    console.log('Wear a t-shirt')
  }
}

whatSahllIWear(50)
whatSahllIWear(80)
whatSahllIWear(60)

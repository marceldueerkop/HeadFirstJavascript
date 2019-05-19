/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
// ================================================================================================
//
//      Filename: Battleship.js
//
//      Discription:
//      Randomly generates a location for and places it on the grid. A classic simple battleship game.
//
//      Lessons learned:
//      To generate the random location the math functions random and floor from javascript are used.
//      The random math.random function generates a value between 0 and 1. The value can be 0 but cannot be 1.
//      To convert the randomly generated number to a maximum value of 4 multiplication * 5 is done.
//      As the value can never be 1 you will never get a starting space of 5.
//      Floor is the used to set this number to a natural number which can be be max 4.
//
//      Version: 1.0
//      Create Date: 19.05.2019
//      Revision: 1
//
//      Known Bugs:
//      Hitting the same correct number 3 times results in a false positive ie. ship sunk.
//
//      Author: Marcel-Christian Dueerkop
// ================================================================================================

var randomLoc = Math.floor(Math.random() * 5)
var location1 = randomLoc
var location2 = location1 + 1
var location3 = location2 + 1

var guess
var hits = 0
var guesses = 0
var isSunk = false

while (isSunk == false) {
  guess = prompt('Ready, aim fire! (enter a number from 0-6):')
  if (guess < 0 || guess > 6) {
    alert('Please enter a valid cell number!')
  } else {
    guesses = guesses + 1
    if (guess == location1 || guess == location2 || guess == location3) {
      alert('HIT!')
      hits = hits + 1
      if (hits == 3) {
        isSunk = true
        alert('You sank my battleship!')
      }
    } else {
      alert('MISS!')
    }
  }
}
var stats = ('You took ' + guesses + ' guesses to sink the battleship, ' + 'which means your shooting accuracy was ' + (3 / guesses))
alert(stats)

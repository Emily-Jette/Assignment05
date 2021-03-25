// all variables are created and pi is set as a constant
let diameter = 0
let radius = 0
let area = 0
let c = 0
const pi = Math.PI

document.getElementById('button').addEventListener('click', math)

function math () {
  // gets value of diameter from text box and converts to get radius
  diameter = document.getElementById('diameter').value
  diameter = parseInt(diameter)
  radius = diameter / 2
  // finds the area of the circle
  area = pi * (radius * radius)
  area = area.toFixed(1)
  // finds the circumfernce of the circle
  c = 2 * (pi * radius)
  c = c.toFixed(1)
  // prints the results
  document.getElementById('answer').innerHTML = 'The area is ' + area + ' and the circumfernce is ' + c +'.'
}

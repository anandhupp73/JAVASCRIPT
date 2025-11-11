// ------------1--------------
const change = document.getElementById('firstp')
console.log(change.innerHTML)
change.innerHTML = 'Hello Vyshak'

// -----------------2-----------------
const color = document.querySelector('.card')
console.log(color.innerHTML)
color.setAttribute('style','background-color:lightblue')

// --------------3-------------------

const newElement = document.createElement('div')
newElement.innerHTML = '<h3 id="main">DOM Practice Session</h3>'
document.body.appendChild(newElement)

// ----------------4-----------------------

const note = document.getElementById('note')
console.log(note.innerHTML)
note.innerHTML = 'Important message'
note.style.fontWeight = 'bold'

// --------------------5-----------------

const logo = document.getElementById('logo')
console.log(logo.src)
logo.src = 'newlogo.png'

// ----------------6-------------------------

const fruit = document.getElementById('fruits')
fruit.innerHTML += '<li>Orange</li>'

// -------------------7--------------------

const del = document.getElementById('deleteThis')
console.log(del.innerHTML)
del.remove()

// -----------------8------------------

const size = document.getElementsByTagName('p')
for(let i of size){
    i.style.fontSize = '18px'
}

// ----------------------9------------------

const append = document.createElement('div')
append.id = 'newDiv'
append.innerHTML = 'this is a new div'
document.body.appendChild(append)

// -------------------10------------------

const item = document.getElementById('items')
const listItem = item.getElementsByTagName('li')

listItem[1].innerHTML = 'Updated Item'
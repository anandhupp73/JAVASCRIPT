// const para = document.getElementsByTagName('p')
// console.log(para)
// for (let i of para){
//     console.log(i.textContent)
// }

// const para = document.getElementsByClassName('p1')
// console.log(para)
// for (let i of para){
//     console.log(i.textContent)
// }

// const para = document.getElementById('p11')
// console.log(para.textContent)

// const paragraph = document.querySelector('.p1')
// console.log(paragraph.textContent)

// const para1 = document.querySelectorAll('.p1')
// for (let i of para1){
// console.log(i.textContent)
// }


// const element = document.getElementById('p11')
// console.log(element.innerHTML)
// element.innerHTML = 'Hello good morining'

// element.setAttribute('style','color:red')
// console.log(element.textContent)
// console.log(element.getAttribute('style'))

// element.classList.add('active')
// element.classList.remove('p1')

// const newElement = document.createElement('div')
// newElement.innerHTML = '<p class="test" >Hi hello</p>'
// newElement.classList.add('container')
// document.body.appendChild(newElement) 


// const divv = document.querySelector('.container')
// const pcontent =  document.querySelector('.test')
// // document.body.removeChild(divv)
// divv.removeChild(pcontent)

const h1 = document.querySelector('.test')
const divv = document.querySelector('.testdiv')
divv.removeChild(h1)
// document.body.remove(divv)

const neww = document.createElement('div')
neww.innerHTML = '<h2 id="testh2">Welcome</h2>'
neww.classList.add('welcomediv')
document.body.appendChild(neww)

const change = document.getElementById('testh2')
console.log(change.innerHTML)
change.innerHTML = 'Hello Vyshakh'
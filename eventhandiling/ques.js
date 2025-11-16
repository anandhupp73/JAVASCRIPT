// ---------------------1---------------------
const faqs = document.querySelectorAll(".faq");
const none = document.querySelectorAll('.faq-answer')
for (let ans of none){
  ans.style.display = 'none'
}

for (let i of faqs) {
  i.addEventListener('click',function(){
    const ans = i.querySelector('.faq-answer')

    if(ans.style.display === 'none'){
      ans.style.display = 'block'
    }
    else{
      ans.style.display = 'none'
    }
  })
}

// -------------------------2-----------------------

const circle = document.querySelector('.cursor')

circle.style.height = '15px'
circle.style.width = '15px'
circle.style.backgroundColor = 'lightgreen'
circle.style.borderRadius = '50%'
circle.style.position = 'fixed'
circle.style.pointerEvents = 'none'
circle.style.left = '0px'
circle.style.top = '0px'
circle.style.transform = 'translate(-50%, -50%)'
circle.style.transition = 'transform 0.05s ease-out'

document.body.style.cursor = 'none'

document.addEventListener('mousemove',function(e){
  circle.style.left = e.clientX + 'px'
  circle.style.top = e.clientY + 'px'
})

// -------------------------------3---------------------

const tool = document.querySelector('.tool')
const tip = document.getElementById('tip')

tool.addEventListener('mouseenter',()=>{
  tip.style.display = 'block'
  tip.style.background = "green"
})

tool.addEventListener('mouseleave',()=>{
  tip.style.display = 'none'

})

// -----------------4-------------

function toggleSection(){
  const sec = document.getElementById('section')
  sec.style.display = sec.style.display === "block" ? "none" : "block"
}

// -----------------5-----------------

const btn = document.getElementById('btn')
btn.onmouseenter = () => btn.style.background = "yellow"
btn.onmouseleave = () => btn.style.background = "white"

// ------------------6-------------------

txt.oninput = () =>{
  document.getElementById('count').textContent = txt.value.length
}

// ------------------7------------------

window.onscroll = () =>{
  const y = window.scrollY
  document.getElementById("layer").style.top = (y * 0.5 ) + "px"
}

// -----------------8---------------

function openModal(src){
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = src;
}
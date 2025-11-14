const btn = document.getElementById('btn')
const sav = document.getElementById('save')
const war = document.getElementById('warning')
let counter = 5

let timer = setInterval(()=>{
    sav.innerHTML = 'click to save button'
    war.innerHTML = `button will disapear in ${counter}`
    counter--

    if(counter<0){
        btn.style.display = 'none'
        war.innerHTML = 'button gone'
        sav.innerHTML = ''
        clearInterval(timer)
    }

},1000)

btn.addEventListener('click',()=>{
    clearInterval(timer)
    sav.innerHTML = 'btn saved'
    war.innerHTML = ''
}
)
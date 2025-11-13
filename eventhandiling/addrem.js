const addbtn = document.getElementById('addbtn')
const btn = document.getElementById('btn')
const rmbtn = document.getElementById('rmbtn')
const outtext = document.getElementById('outtext')

function handleClick(){
    outtext.textContent = 'btn clicked'
}
addbtn.addEventListener('click',function(){
    btn.addEventListener('click',handleClick)
    outtext.textContent = 'event added'
})

rmbtn.addEventListener('click',function(){
    btn.removeEventListener('click',handleClick)
    outtext.textContent = 'event removed'
})

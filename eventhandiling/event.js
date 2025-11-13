// const btn = document.getElementById('mybtn')
// btn.onclick = function(){
//     console.log('btn clicked')
// }

// const btn = document.getElementById('print')
// btn.addEventListener('click',function(){
//     const text = document.getElementById('textbox')
//     console.log(text.value)
// })

document.getElementById('textbx').addEventListener('keypress',function(e){
    console.log(e)
    console.log(e.target.value)
})

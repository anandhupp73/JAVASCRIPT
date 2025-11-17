// const content = document.getElementById('sticky')
// const note = document.getElementById('note')
// const btn = document.getElementById('btn')

// let defaultLeft = note.offsetLeft;
// let defaultTop = note.offsetTop;
// function add(){
//     const neww = document.createElement('div')
//     neww.id = 'text'
//     neww.innerHTML = content.value

//     neww.addEventListener("mouseenter",()=>{
//         const x = Math.random() * window.innerWidth * 0.8; 
//         const y = Math.random() * window.innerHeight * 0.8;

//         note.style.position = "absolute";
//         note.style.left = `${x}px`;
//         note.style.top = `${y}px`;
//     })
//     document.body.appendChild(neww)   
// }
// content.addEventListener("input",() =>{
//     note.innerHTML = content.value
// });

// function change(){
//     const x = Math.random() * window.innerWidth * 0.8; 
//     const y = Math.random() * window.innerHeight * 0.8;

//     note.style.position = "absolute";
//     note.style.left = `${x}px`;
//     note.style.top = `${y}px`;
// }

// function remove(){
//     // note.style.position = "absolute"
//     note.style.left = `${defaultLeft}`
//     note.style.top = `${defaultTop}`
// }

// note.addEventListener("click",()=>{
//     change()
// });

// note.removeEventListener("click",()=>{
//     remove()
// })

// note.addEventListener("mouseover", change);
// note.addEventListener("mouseleave", remove);


// -------------------------------------------------------

const wrapper = document.getElementById("notes-wrapper");
const sticky = document.getElementById("sticky");
const addBtn = document.getElementById("add");

function attachNoteBehavior(note) {
    const defaultLeft = note.offsetLeft;
    const defaultTop = note.offsetTop;

    function moveNote() {
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;

        note.style.position = "absolute";
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;
    }

    function resetNote() {
        note.style.left = `${defaultLeft}px`;
        note.style.top = `${defaultTop}px`;
    }

    note.addEventListener("mouseover", moveNote);
    note.addEventListener("mouseleave", resetNote);
}

addBtn.addEventListener("click", () => {
    const text = sticky.value.trim();
    if (!text) return; 

    // create a new <p>
    const note = document.createElement("p");
    note.classList.add("note");
    note.textContent = text;

    // append into wrapper
    wrapper.appendChild(note);

    // attach functionality
    attachNoteBehavior(note);

    // clear textarea
    sticky.value = "";
});

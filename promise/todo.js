// function getTodos(){
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//         let str = ``

//         data.map((dt)=>{
    
//                 str+=`<li style="color : green "><a href="./details.html?id=${dt.id}"> ${dt.title} <span style="color:${dt.completed?"green":"red"}">${dt.completed?"Complted":"NotComplted"}</span></a></li> `
           
//         })
//         document.getElementById('todo-content').innerHTML = str
//     })
// }
// getTodos()

async function getTodos() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await res.json()

         let str = ``

        data.map((data)=>{
    
                str+=`<li style="color : green "><a href="./details.html?id=${data.id}"> ${data.title} <span style="color:${data.completed?"green":"red"}">${data.completed?"Complted":"NotComplted"}</span></a></li> `
           
        })
        document.getElementById('todo-content').innerHTML = str

    }
    catch(error){
        console.log(`error found ${error}`)
    }
}
getTodos()
const params = new URLSearchParams(location.search);
const id = params.get("id")
async function getDetails(id){

 try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json()
    console.log(data);
                let str = `
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>${data.id}</td>
                    <td>${data.title}</td>
                    <td style="color:${data.completed ? "green" : "red"};font-size:18px;">${data.completed}</td>
                </tr>
            </table>`;

            document.querySelector(".data").innerHTML = str;
 } catch (error) {
    console.log(error);
    
 }
    
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);

//             let str = `
//             <table border="1">
//                 <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Status</th>
//                 </tr>
//                 <tr>
//                     <td>${data.id}</td>
//                     <td>${data.title}</td>
//                     <td style="color:${data.completed ? "green" : "red"};font-size:18px;">${data.completed}</td>
//                 </tr>
//             </table>`;

//             document.querySelector(".data").innerHTML = str;
//         });
}

getDetails(id);
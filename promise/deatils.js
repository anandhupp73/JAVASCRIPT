const params = new URLSearchParams(location.search);
const id = params.get("id")

function getDetails(id){
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)

        let str = `<table border="1">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>status</th>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </table>`
    })
}

getDetails()
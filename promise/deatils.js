const params = new URLSearchParams(location.search);
const id = params.get("id")
function getDetails(id){
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => {
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
        });
}

getDetails(id);
let hour = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('sec')

function updtateClock(){
    const now = new Date()
    hour.innerHTML = now.toLocaleTimeString();
}
updtateClock()

setInterval(updtateClock,1000)
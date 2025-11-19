// ---------------foreach--------------------------------

// 1
const users = ['Aju','Ravi','Alan']
 
users.forEach(function(e,i){
    console.log('username : ',e)
})

// 2

const orders = [{'id':1},{'id':2},{'id':3}]
orders.forEach(function(order){
    order.processed = true
})
console.log(orders)

// 3
const tasks = ["login","payment","logout"]
tasks.forEach(function(tasks){
    console.log('completed',tasks)
})
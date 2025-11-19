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
    console.log(`completed : ${tasks} `)
})

// -----------------------------------map------------------------------

// 1

const price = [200,150,300]

const updateprice = price.map(num=>num+50)
console.log(updateprice)

// 2

const names = ['anandhu','vysakh','alan']
const upper = names.map(name=>name.toUpperCase())
console.log(upper)

// 3

const users2 = [{'name':'anandhu','email':'anandhu@gmail.com'},{'name':'alan','email':'alan@gmail.com'}]
const email = users2.map(users=>users.email)
console.log(email)

// --------------filter----------------------------------------------

// 1

const marks = [20,45,60,80,30]

const above = marks.filter(num=>num>50)
console.log(above)

// 2

const users3 = [{'name':'aju','active':true},{'name':'amal','active':false},{'name':'arun','active':true}]
const active = users3.filter(users=>users.active)
console.log(active)

// 3

const items = [{'item':'pen','selected':true},{'item':'book','selected':false}]
const selected = items.filter(item=>item.selected)
console.log(selected)

// --------------------reduce---------------------

// 1

const amounts = [300,150,200]
const total = amounts.reduce((acc,num)=>acc+num)
console.log(total)

// 2
const statuses = ['pending','done','pending','pending','done']
const pend = statuses.reduce(function(acc,stat){
    if(stat=='pending'){
        acc++
    }
    return acc
},0)
console.log(pend)

// 3

const words = ['learn','javascript','today']
const string = words.reduce((acc,word)=>acc+' '+word)
console.log(string)

// ----------------------------------find--------------------------------

// 1

const nums = [5,12,25,8,33,44]
const great = nums.find(num=>num>20)
console.log(great)

// 2

const users4 = [{'name':'aju','verified':true},{'name':'alan','verified':true},{'name':'ravi','verified':false}]
const verified = users4.find(user=>user.verified)
console.log(verified)

// 3

const products = [{'id':1,'name':'pen'},{'id':2,'name':'book'},{'id':3,'name':'bag'}]
const prod = products.find(prod=>prod.id==3)
console.log(prod)
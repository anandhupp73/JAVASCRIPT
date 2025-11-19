arr = [1,2,3,4]

arr.forEach(function(e,i) {
    let sqr = e * e
    console.log('index :',i,'sqr :',sqr)
});

arr.forEach(function(e,i){
    if(e%3==0){
        console.log('index',i,'num',e)
    }
})

array = [4,5,6,7,8]
sqr_array = array.map(num=>num*num)
console.log(sqr_array)

users = [{'name':'anandhu','age':20},{'name':'amal','age':22}]
newUser = users.map(users=>users.name)
console.log(newUser)

// ---------------uppercase----------------

names = ['alice','jhon','manu']
upper = names.map(e=>e.toUpperCase())
console.log(upper)

// ---------------------------------------------------------------------

even = [1,2,3,4,5,6]
even_arr = even.filter(num=>num%2==0)
console.log(even_arr)

// --------------------------------------------------------------------

large = ['anandhu','amal','anu','jithin','abhisek']
morethanfive = large.filter(function(names){
    return names.length > 5
})
console.log(morethanfive)
// --------------------------------------------------------------

usersnew = [{'name':'anandhu','age':20},{'name':'amal','age':22},{'name':'linu','age':12},{'name':'yadhu','age':11}]
over18 = usersnew.filter(function(users){
    return users.age > 18
})
console.log(over18)

// -----------------------------------------------------------------

feven = [1,2,3,4,5,6]
feven_arr = feven.find(num=>num%2==0)
console.log(feven_arr)


// -----------------------------------------------------------------------

console.log('largest')

big = [1,2,3,4,10,5,6]

largest = big.reduce(function(acc,num){
    return Math.max(acc,num)
})
console.log(largest)
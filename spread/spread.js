// arr = [1,2,3]
// arr2 = [4,5,6]
// test = arr

// console.log(test)

// arr3 = [...arr,...arr2,7,8,9]

// console.log(arr3)

// const obj = {'a':1,'b':2}
// const obj2 = {'c':3,'d':4}
// const newobj = Object.assign({},obj,obj2)
// console.log(newobj)

// const obj3 = {'a':1,'b':2}
// const obj4 = {'b':3,'c':4}
// const newobj1 = Object.assign({},obj3,obj4)
// console.log(newobj1)

// funcrarr = [1,2,3,4]

// function sum(a,b,c,d){
//     return a+b+c+d

// }
// result=sum(...funcrarr)
// console.log(result)

// function to_arr(...arr){
//     return arr
// }
// test=to_arr(1,2,3,4)
// console.log(test)
// ------------------------------------------------------------------------

// console.log('descrtucture')

// let destruc = [1,2,3,4,5]
// const [a,b,,d,e] = destruc
// console.log(a)
// console.log(d)

// console.log('------------------------------------------------')

// const [f,g,...rem] = destruc
// console.log(f)
// console.log(g)
// console.log(rem)

// nested Array 

// console.log('---------------------------------------------------')

// nested = [1,2,3,4,[5,6,7]]
// const [,,,,l] = nested
// console.log(l)

// -------------------------------------------------------------------

// obj = {'name':'anandhu','age':20}

// const {name,age} = obj
// console.log(name)
// const {name:Username,age:Userage} = obj

// console.log(Username)

// --------------------nested object descructure ------------------------

// obj = {'name':'anandhu','age':20,'address':{'city':'vaikom','state':'kerala'}}

// const {name,age,address:{city,state}} = obj
// console.log(name,age,city,state)

// -----------------function parameter descrtucture -----------------------

// const obj = {'name':'anandhu','age':20,'state':'kerala'}
// function greet({name,age,state}){
//     console.log(name,age,state)
// }
// greet(obj)

// const {name,...rest} = obj
// console.log(rest)
// str1 = {'name':'anandhu','age':20}
// console.log(str1.name)

// const car ={'name':'bmw','color':'red','start':function(){
//     console.log('car started')
// }}

// console.log(car.name)
// car.start()

// const person = new Object()
// person.name = 'anandhu'
// console.log(person.name)

// ----------------------------------------------------------------

// const cars = {
//     'brand' : 'bmw',
//     'color' : 'Black'
// }
// // for(let key in cars){
// //     console.log(`${key}:${cars[key]}`)
// // }

// let a = Object.keys(cars)
// console.log(a)
// let b = Object.values(cars)
// console.log(b)
// let c = Object.entries(cars)
// console.log(c)
// // Object.freeze(cars)
// // cars['year'] = 2025
// Object.seal(cars)
// // cars['year'] = 2025
// // cars.color = 'red'
// console.log(cars)

// -------------------------------------------------------------

// let arr = [{'name':'anandhu','age':23},{'name':'manu','age':22}]

// str = JSON.stringify(arr)
// console.log(str)

// obj = JSON.parse(str)
// console.log(obj[0].name)

// ------------------------------------------------

// let a = 20
// let b = a
// b = 10
// console.log(a)
// console.log(b)

let c = [1,2,3,4,5]
let d = c
d[1]=10
console.log(c)
console.log(d)

// ----------------------------------------------------

// closure 

function outerFunction() {
    let outerVar = "I am outside! hello";
    
    function innerFunction() {
        console.log(outerVar);
    }
    
    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction has finished executing
myClosure(); // logs: "I am outside!"



function createCounter() {
    let count = 0; // private variable

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


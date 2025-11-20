// console.log(this)

// const obj = {
//     'name' : 'amal',
//     'age' : 20,
//     'greet': function(){
//         // console.log(this)
//         console.log('hi '+ this.name + ' is your age ' + this.age)
//     }
// }
// obj.greet()

const obj = {
    'name' : 'amal',
    'age' : 20,
    'greet': ()=>{
        console.log('hi '+ this.name + ' is your age ' + this.age)
    }
}
obj.greet()

// const obj2 = {
//     'name' : 'anandhu'
// }

// function get(role){
//     // console.log('hi' + this.name + 'your role is ' + role)
//     console.log(`hi ${this.name} you role is ${role}`)
// }
// get.call(obj2,'developer')

// const obj2 = {
//     'name' : 'anandhu'
// }

// function get(role,dep){
//     // console.log('hi' + this.name + 'your role is ' + role)
//     console.log(`hi ${this.name} you role is ${role} your dep is ${dep}`)
// }
// get.apply(obj2,['developer','software'])


// const obj2 = {
//     'name' : 'anandhu'
// }

// function get(role,dep){
//     // console.log('hi' + this.name + 'your role is ' + role)
//     console.log(`hi ${this.name} you role is ${role} your dep is ${dep}`)
// }
// newfunc = get.bind(obj2,'developer','software')

// newfunc()




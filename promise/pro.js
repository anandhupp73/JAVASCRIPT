// let mypromise = new Promise((resolve,reject)=>{
//     let succes = true
//     setTimeout(()=>{
//         if(succes){
//             resolve('true')
//         }
//         else{
//             reject('failure')
//         }
//     },2000)
// })
// mypromise
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

//----------------------------------------------------------------------------------------------

// function getUserfromServer(userID){
//     return new Promise((resolve,reject)=>{
//         console.log('fetching user')
//         setTimeout(()=>{
//             users = { 1:{'name':'manu','age':20},
//                       2:{'name':'anu','age':16}
//                     }
//             if(users[userID]){
//                 resolve(users[userID])
//             }
//             else{
//                 reject('no user found')
//             }
//         },2000)
//     })
// }
// getUserfromServer(2)
//     .then(user=>console.log(user))
    // .catch(error=>console.log(error))

// ---------------------------------------------------------------------------------------------    

// function selectProduct(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('product selected'),2000)
//     })
// }
// function makePayment(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('payment ok'),2000)
//         // setTimeout(()=>reject('payment failed'),2000)
//     })
// }
// function orderConform(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('order conformed'),2000)
//     })
// }
// selectProduct()
//     .then(msg=>{
//         console.log(msg)
//         return makePayment()}
//     )
//     .then(msg=>{
//         console.log(msg)
//         return orderConform()
//     })
//     .then(msg=>{
//         console.log(msg)
//     })
//     .catch(error=>console.log(error))

// ---------------------------------------------------------------------------------------------

// let p1 = new Promise((resolve,reject)=>setTimeout(()=>reject('task1'),1000))
// let p2 = new Promise(resolve=>setTimeout(()=>resolve('task2'),2000))
// let p3 = new Promise((resolve,reject)=>setTimeout(()=>reject('task3'),3000))

// Promise.all([p1,p2,p3])
//     .then(result=>console.log('all done'))
//     .catch(error=>console.log(error))
    // .finally(()=>console.log('final'))

// Promise.race([p1,p2,p3])
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))
    // .finally(()=>console.log('final'))

// Promise.allSettled([p1,p2,p3])
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))
    // .finally(()=>console.log('final'))

// Promise.any([p1,p2,p3])
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))
    // .finally(()=>console.log('final'))

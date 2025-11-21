// // console.log(x)

// // try{
// //     console.log(x)
// // }catch(error){
// //     console.log('error occured',error.message)
// // }
// // finally{
// //     console.log('excecution ceompleted')
// // }

// // ------------------custom error thrwoing ------------------ 

// // function canVote(age){
// //     if(age<18){
// //         throw new Error('you must been atleast 18 years old')
// //     }
// //     return 'Accesgrand'
// // }
// // try{
// //     console.log(canVote(17))
// // }catch(error){
// //     console.log('error : ',error.message)
// // }


// // try{
// //     let x = 10
// //     console.log(x.toUpperCase())
// // } catch(error){
// //     if(error instanceof TypeError){
// //         console.log('error',error.message)
// //     }
// //     else{
// //         console.log('other error',error.message)
// //     }
// // }

// // --------------------------------------callback-------------------------------

// function main(child,next){
//     console.log('hello')
//     let a = 10
//     let b = 20 
//     const c = a+b
//     setTimeout(() => {
//         child(c,next)
//     }, 3000);
// }

// function child(c,next){
//     console.log('test')
//     setTimeout(()=>{
//         console.log('result',c)
//     },2000)
//     setTimeout(()=>{
//          if (next)  next()
//     },3000)

// }

// function afterChild(){
//     console.log('this executes after child function')
// }

// main(child,afterChild)

// // function main(child){
// //     console.log('hello')
// //     let a = 10
// //     let b = 20 
// //     const c = a+b
// //     setTimeout(() => {
// //         child(c)
// //     }, 3000);
// // }

// // function child(c,next){
// //     console.log('test')
// //     setTimeout(()=>{
// //         console.log('result',c)
// //     },2000)


// // }

// // function afterChild(){
// //     console.log('this executes after child function')
// // }

// // main(child)

// ----------------------------------------------------------------------------------

// Define firstTask function
// function firstTask(callback) {
//     console.log("callback", callback)
//     setTimeout(() => {
//         console.log("First task done");
//         callback(); // Call the callback after 1 second
//     }, 1000);
// }

// // Define secondTask function
// function secondTask(callback) {
//     setTimeout(() => {
//         console.log("Second task done");
//         callback(); // Call the callback after 1 second
//     }, 1000);
// }

// // Invoke the functions using nested callbacks
// firstTask(function () { //first task invocatin 
//     secondTask(function () {
//         console.log("All tasks completed!");
//     });
// });

// ---------------------------------------------------------------------

// function delayLog(message, delay, callback) {
//     setTimeout(() => {
//         console.log(message);
//         callback();
//     }, delay);
// }

// delayLog("Step 1", 1000, function() {
//     delayLog("Step 2", 500, function() {
//         // console.log("Done");
//         delayLog("step 3",2000,function(){

//         })
//     });
// });

// --------------------------------------------------------------------

// function add(a, b, callback) {
//     let sum = a + b;
//     callback(sum);
// }
// add(5,10,function(res){
//     console.log('result',res)
//     setTimeout(()=>{
//         const square = res * res;
//         console.log('square',square)
//     },3000)
// })

// ------------------------------------------------------------------------

// function checkEven(num, callback) {
//     if (num % 2 === 0) {
//         callback(num);
//     } else {
//         console.log(num + " is odd");
//     }
// }

// checkEven(10,function(num){
//     console.log('even number',num);
//     setTimeout(()=>{
//        checkEven(7,function(num2){
//         console.log('even',num2);
//        });
//     },3000);
// });



function checkEven(num, callback) {
    if (num % 2 === 0) {
        console.log(num + ' is even')
    } else {
        console.log(num + " is odd");
    }
    callback()
}


checkEven(10, function() {
    setTimeout(() => {
        checkEven(7, function() {
            setTimeout(() => {
                checkEven(12, function() {
                    setTimeout(()=>{
                        checkEven(15,function(){
                            setTimeout(()=>{
                                checkEven(20,function(){
                                    console.log('printed')
                                })
                            },2000)
                        })
                    },2000)
                });
            },2000);
        });
    }, 3000);
});

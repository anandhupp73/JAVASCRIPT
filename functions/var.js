// var x =10
// var x = 11
// console.log(x)

// console.log(x)
// var x = 10

// {
//     let x = 10
//     // console.log(x)
// }

// console.log(x)

// {
//     let x = 10
//     x = 11
//     console.log(x)
// }
// {
//     {
//     const x = 10
//     console.log(x)
//     }
//     const x =11
//     console.log(x)
// }

// {
//     console.log(x)
//     const x = 10
// }

// {
//     const x = 10
//     {
//         console.log(x)
//     }
// }

for(i=1;i<=20;i++){
    if(i%3==0 && i%5==0){
        console.log('fizzbuzz')
    }
    else if(i%3 == 0){
        console.log('fizz')
    }
    else if(i%5 ==0){
        console.log('buzz')
    }
    else{
        console.log(i)
    }
}
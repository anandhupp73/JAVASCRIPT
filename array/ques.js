// arrow function takes array of num input returns only even num

// const getEven = (arr) => arr.filter(num => num%2 == 0)
// console.log(getEven([1,2,3,4,5,6,7,8]))

// const a =[1,2,3]
// const b = a
// b.push(4)
// console.log(a)

// function reverse(str){
//     let words = str.split('').reverse().join('')
//     return words
// }
// result=reverse('hello')
// console.log(result)

// console.log('5'-2)
// console.log('5'+2)

// - only works with num string 5 converted into string 
// The + operator in JavaScript is special — it can mean either addition or string concatenation.

// If either operand is a string, JavaScript converts the other operand to a string and concatenates them.

// function that counts how manytimes each characters appers in a string

function countChars(str){
    let count = {}
    for(char of str){
        if(counts[char]){
            counts[char]++
        }else{
            counts[char] =1
        }
    }
    return counts
}
result =countChars('javascript')
console.log(result)
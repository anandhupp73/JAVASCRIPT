// methods for string 


// let a = 'hello world'
// console.log(a[1])
// let len = a.length
// // console.log(len)
// for(i=0;i<=len-1;i++){
//     console.log(a[i])
// }

// console.log(a.toUpperCase())
// console.log(a.substring(0,3))
// console.log(a.toLowerCase())
// console.log(a.trim()) 
// console.log(a.trimLeft())
// console.log(a.trimRight())
// console.log(a.replace('hello','hai'))
// console.log(a)
// console.log(a.startsWith('hai'))
// console.log(a.endsWith('Good Morning'))
// console.log(a.split(' '))

// let x = ['hello', 'world']
// console.log(x.join(',')) 



// // reverse 
// let x = 'hello'
// let words = x.split('').reverse().join('')
// console.log(words)

// // palindrome 
// let str = 'malayalam'
// let isPalindrome = str === str.split('').reverse().join('')
// console.log(isPalindrome)


// // vowels
// let vow = 'Good Morning day'
// let count = 0
// let vowels = 'aeiouAEIOU'

// for(let char of vow){
//     if(vowels.includes(char)){
//         count++
//     }
// }
// console.log(count)

// // Count Words in a Sentence
// let sentence = 'hello world python java'
// let word = sentence.trim().split(' ')
// console.log(word.length)


// let strr = "one two three four"
// let parts = strr.split(" ", 2)
// console.log(parts)

// let b = 'anandhu'
// let len = b.length
// console.log(len)
// for(i=len -1;i>=0;i--){
//     console.log(b[i])
// }

// let spec = 'l'
// let str = 'helloworld'
// let count = 0
// let len = str.length
// for(i=0;i<=len-1;i++){
//     if(str[i]==spec){
//         count++
//     }
// }
// console.log(count)


// let str = 'hello'
// let len = str.length
// let see = {}
// let result = ''
// for(i=0;i<=len-1;i++){
//     if(!see[str[i]]){
//         result += str[i]
//         see[str[i]]=true
//     }
// }
// console.log(result)

// function norepeat(str){
//     let len = str.length
//     for ( i=0; i<len; i++) {
//         let count = 0;
//         for (let j = 0; j<len; j++) {
//         if (str[i] === str[j]) {
//             count++;
//         }
//         }
//         if (count === 1) {
//         return str[i];
//         }
//     }
//     return null;
// }

// result=norepeat('anandhu')
// console.log(result)

// how many words are in string 

// let str = 'welcome    '
// let len = str.trim().length
// console.log(len)
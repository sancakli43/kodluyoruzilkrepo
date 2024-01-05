function vowelsAndConsonants(s) {
    
}

let str = "javascript";
let str1 = str.split("")
str1 = str1.sort((a,b)=>{
    return b-a;
})
console.log(str1);
console.log(vowelsAndConsonants(str))
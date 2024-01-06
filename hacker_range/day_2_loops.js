function vowelsAndConsonants(s) {
    let vowels = "aeiou";
    let strVowels = "";
    let strConsonants = "";
    for (let i of s) {
        if (vowels.includes(i)) {
            strVowels+=i;
        }else{
            strConsonants += i;
        }
    }
    for (k of strVowels.concat(strConsonants)) {
        console.log(`${k}`);
    }
}



let str = "javascriptloops";

vowelsAndConsonants(str)
/* function getLetter(s) {
    let letter;
    switch (s[0]) {
        case "aeiou".charAt("aeiou".indexOf(s[0])):
            letter = "A";
            break;
        case "bcdfg".charAt("bcdfg".indexOf(s[0])):
            letter = "B";
            break;
        case "hjklm".charAt("hjklm".indexOf(s[0])):
            letter = "C";
            break;
        case "npqrstvwxyz".charAt("npqrstvwxyz".indexOf(s[0])):
            letter = "D";
            break;
        default:
            console.log("Lütfen gecerli deger giriniz");
    }

    return letter;
}



const s = "zwxya";

console.log(getLetter(s));
// console.log(s[0]); */

/* let boolean;

    const isBooleanTrue = boolean ? true : false;

    // console.log(isBooleanTrue)

    console.log(boolean)

    var money;
    var canBuy = 
        (money < 17) ? "Satın alamazsın..":
        (money > 30) ? "Satın alabilirsin..":
        "Para miktarını girmen gerekmektedir..";

    console.log(canBuy)  */

/* function printScreen1() {
    document.querySelector("#demo").innerHTML += `İlk ekran çıktısı<br>`;
}

function printScreen2() {
    setTimeout(function () {
        document.querySelector("#demo").innerHTML += `İkinci ekran çıktısı<br>`;
    }, 1);
}

function printScreen3() {
    document.querySelector("#demo").innerHTML += `Üçüncü ekran çıktısı<br>`;
}
printScreen1();
printScreen2();
printScreen3(); */

/* function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2(callback1, callback2) {
    setTimeout(function () {
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}


printScreen2(printScreen1, printScreen3); */

/* function sayacartir() {
    let sayac = 0;
  
    return function () {
      return sayac++;
    };
  }
  
  let counter = sayacartir();
  
  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2 */



/* const func = list => {
    const newList = [];
    list.forEach(element => {
        if(element%2==0){
            newList.push(element*2);
        }else{
            newList.push(element*3);
        }
    });
    return newList;
};

const array = [1, 2, 3, 4, 5];

console.log(func(array)); */

/* let demo = document.querySelector("#demo");

demo.addEventListener("mouseover",callback);

function callback () {
    this.style.color!="red"?this.style.color="red":this.style.color="black";
} */

/* const artir = document.querySelector("#increment");
const azalt = document.querySelector("#decrement");
let counter = 0;

artir.addEventListener("click", increment);

azalt.addEventListener("click", decrement);

function increment(){
    counter++;
    document.querySelector("#counter").innerHTML = counter;
    console.log("increment");
}

function decrement() {
    counter--;
    document.querySelector("#counter").innerHTML = counter;
    console.log("decrement");
} */

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}
];
console.log(person.filter(i => i.age > 30));
console.log(person.filter(i => i.languages.includes("JavaScript")));
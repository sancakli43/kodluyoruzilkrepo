/* Soru 1
let sayilar = [2, 5, 8, 11, 15, 17];
Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)*/

let sayilar = [2, 5, 8, 11, 15, 17];
const ondanBuyuklerin5IleCarpilmisDizi = sayilar.filter(i => {
    return i > 10;
}).map(i => {
    return i * 5;
})
console.log(ondanBuyuklerin5IleCarpilmisDizi);

/* Soru2
let dizi = [3,6,9,14,16];
Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.*/

let numbers = [3, 6, 9, 14, 16];

function myFunction(dizi) {

    let status = dizi.some(i => {
        return i > 5;
    });
    if (status) {
        console.log("Beşten büyük bir eleman mevcut.");
    } else {
        console.log("5'ten büyük eleman mevcut değil.");
    }
}

myFunction(numbers);

/* let dizi = [2,3,4];
Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız. */

let dizi = [2, 3, 4];

function multiply(dizi) {
    let result = 1;
    dizi.forEach(i => {
        result *= i;
    })
    console.log(result)
}
multiply(dizi);
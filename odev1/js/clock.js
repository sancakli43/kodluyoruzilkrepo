let user = prompt("Kullanıcı adınızı giriniz: ");
let userName = document.querySelector("#myName");
userName.innerHTML = user;

setInterval(showTime, 1000);

function showTime() {
    let date = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    let day = days[date.getDay()];
    document.querySelector("#myClock").innerHTML = `${hour}:${minute}:${second} ${day}`;
}
const rates = {
USD: 1,
EUR: 0.92,
GBP: 0.78,
RWF: 1300
};

function convert(){

let amount = document.getElementById("amount").value;
let from = document.getElementById("from").value;
let to = document.getElementById("to").value;
let result = document.getElementById("result");

if(amount == ""){
result.innerHTML = "Please enter amount";
return;
}



let usd = amount / rates[from];
let final = usd * rates[to];

let output = amount + " " + from + " = " + final.toFixed(2) + " " + to;

result.innerHTML = output;

// 🔥 SAVE TO HISTORY
let history = JSON.parse(localStorage.getItem("history")) || [];

history.push({
amount: amount,
from: from,
to: to,
result: final.toFixed(2)
});

localStorage.setItem("history", JSON.stringify(history));
}
function swapCurrencies(){

let from=document.getElementById("from");
let to=document.getElementById("to");

let temp=from.value;
from.value=to.value;
to.value=temp;

}




let box = document.getElementById("historyBox");

if (box && window.location.pathname.includes("history")) {

    let history = JSON.parse(localStorage.getItem("history")) || [];

    if(history.length == 0){
        box.innerHTML = "<p>No history yet</p>";
    } else {
        history.forEach(item => {
            box.innerHTML += `
            <p>
            ${item.amount} ${item.from} = ${item.result} ${item.to}
            </p>
            <hr>
            `;
        });
    }
}

loadTheme();
function changeTheme(value){
localStorage.setItem("theme", value);
applyTheme();
}

function changeBrightness(value){
localStorage.setItem("brightness", value);
applyTheme();
}

function changeLanguage(lang){
localStorage.setItem("language", lang);
applyLanguage();
}

function applyTheme(){
let theme = localStorage.getItem("theme");
let brightness = localStorage.getItem("brightness");

if(theme === "dark"){
document.body.classList.add("dark");
}else{
document.body.classList.remove("dark");
}

if(brightness){
document.body.style.filter = "brightness(" + brightness + "%)";
}
}

function applyLanguage(){
let lang = localStorage.getItem("language");

if(lang == "rw"){
alert("Uru ni Kinyarwanda mode");
}
}

window.onload = function(){
applyTheme();
applyLanguage();
}

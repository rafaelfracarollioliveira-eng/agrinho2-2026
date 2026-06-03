// MODO ESCURO

document
.getElementById("darkBtn")
.onclick = () =>
document.body.classList.toggle("dark");

// FONTE

let tamanho = 16;

document.getElementById("fontPlus")
.onclick = () => {

tamanho += 2;

document.body.style.fontSize =
tamanho + "px";

};

document.getElementById("fontMinus")
.onclick = () => {

tamanho -= 2;

if(tamanho < 12) tamanho = 12;

document.body.style.fontSize =
tamanho + "px";

};

// QUIZ

function quiz(correto){

const r =
document.getElementById("resultado");

if(correto){

r.innerHTML =
"✅ Correto!";

r.style.color =
"green";

}else{

r.innerHTML =
"❌ Incorreto!";

r.style.color =
"red";

}

}

// BARRA DE PROGRESSO

window.addEventListener("scroll",()=>{

let total =
document.documentElement.scrollHeight -
window.innerHeight;

let progresso =
(window.scrollY / total) * 100;

document.getElementById("progress-bar")
.style.width =
progresso + "%";

});

// LEITOR DE TEXTO

document
.getElementById("audioBtn")
.addEventListener("click",()=>{

const texto =
document.body.innerText;

const fala =
new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";

speechSynthesis.speak(fala);

});

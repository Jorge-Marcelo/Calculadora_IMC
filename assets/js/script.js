
function calcularIMC(){
let IMC;
let pesoInput = document.getElementById("pesoInput");
let alturaInput = document.getElementById("alturaInput");
let alturaValue = document.getElementById("altura");
let pesoValue = document.getElementById("peso");
let categoriaTexto = document.getElementById("categoria");
let resultado = document.getElementById("resultado");

let peso = parseInt(pesoInput.value);
pesoValue.textContent = `${peso} Kg`;

let altura = parseInt(alturaInput.value);
alturaValue.textContent = `${altura} Cm`;


IMC = peso / (altura / 100 * altura / 100);
resultado.textContent = IMC.toFixed(2);

let categoria;

if (IMC < 18.5){
categoria = "Abaixo do peso";
categoriaTexto.style.color = "#1200ff";
resultado.style.color = "#1200ff";
}

else if (IMC >= 18.5 && IMC <= 24.9){
categoria = "Peso Normal";
categoriaTexto.style.color = "white";
resultado.style.color = "#209601";
}

else if (IMC >= 25 && IMC <= 29.9){
categoria = "Sobrepeso";
categoriaTexto.style.color = "#ff4e00";
resultado.style.color = "#ff4e00";
}
else{
categoria = "Obesidade";
categoriaTexto.style.color = "#ff0000";
resultado.style.color = "#ff0000";
}
categoriaTexto.textContent = categoria;
}

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})
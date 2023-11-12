const corpo = document.querySelector("body")

let containerPrincipal = document.querySelector("#principal");

let questions = document.querySelector("#questions")

let alternativas = document.querySelector(".alternativas")

let respostaA = document.querySelector("#resposta-A")
let respostaB = document.querySelector("#resposta-B")
let respostaC = document.querySelector("#resposta-C")
let respostaD = document.querySelector("#resposta-D")

let iniciar = document.querySelector('.but')

let avancar = document.querySelector("avancar")


// Iniciando o Quiz

iniciar.addEventListener("click", () => {

    containerPrincipal.setAttribute("Class", "hide");

    questions.removeAttribute("Class");

    corpo.style.backgroundImage = "none";
    corpo.style.backgroundColor = "#fff";    

});
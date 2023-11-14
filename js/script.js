const corpo = document.querySelector("body")

let containerPrincipal = document.querySelector("#principal");

let questions = document.querySelector("#questions")

let alternativas = document.querySelector("#questions .alternativas")

let alternativaPai = alternativas.parentNode;

let respostaA = document.querySelector(".alternativas #resposta-A")
let respostaB = document.querySelector(".alternativas #resposta-B")
let respostaC = document.querySelector(".alternativas #resposta-C")
let respostaD = document.querySelector(".alternativas #resposta-D")

let iniciar = document.querySelector('.but')

let avancar = document.querySelector("avancar")


// Iniciando o Quiz

iniciar.addEventListener("click", () => {

    containerPrincipal.setAttribute("Class", "hide");

    questions.removeAttribute("Class");

    corpo.style.backgroundImage = "none";
    corpo.style.backgroundColor = "#fff";    

});

// Selecionando resposta

let selection = 0;

respostaA.addEventListener("click", (e) => {

    e.stopPropagation();

    if(selection == 0) {

        respostaA.style.border = "#2E12DF solid 3px";
        selection++;
    }
     else if(selection==1) {

        respostaA.style.border = "#2E12DF solid 3px";
        respostaB.style.border = "#000 solid 2px";
        respostaC.style.border = "#000 solid 2px";
        respostaD.style.border = "#000 solid 2px";

     }
});
respostaB.addEventListener("click", (e) => {

    e.stopPropagation();

    if(selection == 0) {

        respostaB.style.border = "#2E12DF solid 3px";
        selection++;
    }
     else if(selection==1) {

        respostaB.style.border = "#2E12DF solid 3px";
        respostaA.style.border = "#000 solid 2px";
        respostaC.style.border = "#000 solid 2px";
        respostaD.style.border = "#000 solid 2px";

     }
});
respostaC.addEventListener("click", (e) => {

    e.stopPropagation();

    if(selection == 0) {

        respostaC.style.border = "#2E12DF solid 3px";
        selection++;
    }
     else if(selection==1) {

        respostaC.style.border = "#2E12DF solid 3px";
        respostaB.style.border = "#000 solid 2px";
        respostaA.style.border = "#000 solid 2px";
        respostaD.style.border = "#000 solid 2px";

     }
});
respostaD.addEventListener("click", (e) => {

    e.stopPropagation();

    if(selection == 0) {

        respostaD.style.border = "#2E12DF solid 3px";
        selection++;
    }
     else if(selection==1) {

        respostaD.style.border = "#2E12DF solid 3px";
        respostaB.style.border = "#000 solid 2px";
        respostaC.style.border = "#000 solid 2px";
        respostaA.style.border = "#000 solid 2px";

     }
});
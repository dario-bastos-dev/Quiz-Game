const corpo = document.querySelector("body")

let containerPrincipal = document.querySelector("#principal");

let questions = document.querySelector("#questions")

let alternativas = document.querySelectorAll("#questions .alternativas .resposta");

let respostaA = document.querySelector(".alternativas #resposta-A")
let respostaB = document.querySelector(".alternativas #resposta-B")
let respostaC = document.querySelector(".alternativas #resposta-C")
let respostaD = document.querySelector(".alternativas #resposta-D")

let iniciar = document.querySelector('.but')

let verificar = document.querySelector("#verificar")
let avancar = document.querySelector("#avancar")


// Iniciando o Quiz

iniciar.addEventListener("click", () => {

    containerPrincipal.setAttribute("Class", "hide");

    questions.removeAttribute("Class");

    corpo.style.backgroundImage = "none";
    corpo.style.backgroundColor = "#fff";    

});

// Selecionando resposta

let selection = 0;
let resp;

for(let i = 0; i < alternativas.length; i++) {

    alternativas[i].addEventListener("click", function() {

        let selected = alternativas[i].getAttribute("id");
        
        // Resposta A
        if(selected == "resposta-A") {

            if(selection == 0) {

                 respostaA.style.border = "#2E12DF solid 3px";
                 selection++;
                 resp = selected;
            }
            else if(selection == 1) {

                 respostaA.style.border = "#2E12DF solid 3px";
                 respostaB.style.border = "#000 solid 2px";
                 respostaC.style.border = "#000 solid 2px";
                 respostaD.style.border = "#000 solid 2px";
                 resp = selected;

            }
        }
        // Resposta B
        else if(selected == "resposta-B") {

            if(selection == 0) {

                respostaB.style.border = "#2E12DF solid 3px";
                selection++;
                resp = selected;
           }
           else if(selection == 1) {

                respostaB.style.border = "#2E12DF solid 3px";
                respostaA.style.border = "#000 solid 2px";
                respostaC.style.border = "#000 solid 2px";
                respostaD.style.border = "#000 solid 2px";
                resp = selected;
        }
    }
    // Resposta C
    else if(selected == "resposta-C") {

        if(selection == 0) {

            respostaC.style.border = "#2E12DF solid 3px";
            selection++;
            resp = selected;
       }
       else if(selection == 1) {

            respostaC.style.border = "#2E12DF solid 3px";
            respostaA.style.border = "#000 solid 2px";
            respostaB.style.border = "#000 solid 2px";
            respostaD.style.border = "#000 solid 2px";
            resp = selected;
    }
    }
    // Resposta D
    else if(selected == "resposta-D") {
        if(selection == 0) {

            respostaD.style.border = "#2E12DF solid 3px";
            selection++;
            resp = selected;
       }
       else if(selection == 1) {

            respostaD.style.border = "#2E12DF solid 3px";
            respostaA.style.border = "#000 solid 2px";
            respostaC.style.border = "#000 solid 2px";
            respostaB.style.border = "#000 solid 2px";
            resp = selected;
    }
    }
})
};


//Verificando a resposta

let contador = 0;
let acertos = 0;

verificar.addEventListener("click", function() {

    if(resp == null) {
        alert("selecione uma alternativa")
    }
    else if(resp != null) {

    if(contador == 0) {

        respostaB.style.border = "#4BAE4F solid 3px";
        let img = respostaB.childNodes[1];
        img.getAttribute("src");
        img.setAttribute("src", "./img/certo-errado/image1.png");

        if(resp == "resposta-B") {

            acertos++;
            contador++;
        }
        else if(resp != "resposta-B") {

            contador++;
            for(let j = 0; j < alternativas.length; j++) {

                if(alternativas[j].getAttribute("id") == resp) {

                    alternativas[j].style.border = "#EC1515 solid 3px";
                    let img = alternativas[j].childNodes[1];
                    img.getAttribute("src");
                    img.setAttribute("src", "./img/certo-errado/image2.png");
                }
            }
        }
    }

    verificar.classList.add("hide");
    avancar.classList.remove("hide");
}
})
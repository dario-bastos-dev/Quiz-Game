const corpo = document.querySelector("body");

let containerPrincipal = document.querySelector("#principal");

let questions = document.querySelector("#questions");

let alternativas = document.querySelectorAll(
  "#questions .alternativas .resposta"
);

let respostaA = document.querySelector(".alternativas #resposta-A");
let respostaB = document.querySelector(".alternativas #resposta-B");
let respostaC = document.querySelector(".alternativas #resposta-C");
let respostaD = document.querySelector(".alternativas #resposta-D");

let iniciar = document.querySelector(".but");

let verificar = document.querySelector("#verificar");
let avancar = document.querySelector("#avancar");

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

for (let i = 0; i < alternativas.length; i++) {

  alternativas[i].addEventListener("click", function () {

    let selected = alternativas[i].getAttribute("id");

    // Resposta A
    if (selected == "resposta-A") {

      if (selection == 0) {

        respostaA.style.border = "#2E12DF solid 3px";
        selection++;
        resp = selected;

      } else if (selection == 1) {
        respostaA.style.border = "#2E12DF solid 3px";
        respostaB.style.border = "#000 solid 2px";
        respostaC.style.border = "#000 solid 2px";
        respostaD.style.border = "#000 solid 2px";
        resp = selected;
      }
    }

    // Resposta B
    else if (selected == "resposta-B") {

      if (selection == 0) {

        respostaB.style.border = "#2E12DF solid 3px";
        selection++;
        resp = selected;

      } else if (selection == 1) {

        respostaB.style.border = "#2E12DF solid 3px";
        respostaA.style.border = "#000 solid 2px";
        respostaC.style.border = "#000 solid 2px";
        respostaD.style.border = "#000 solid 2px";
        resp = selected;
      }
    }
    // Resposta C
    else if (selected == "resposta-C") {

      if (selection == 0) {

        respostaC.style.border = "#2E12DF solid 3px";
        selection++;
        resp = selected;

      } else if (selection == 1) {

        respostaC.style.border = "#2E12DF solid 3px";
        respostaA.style.border = "#000 solid 2px";
        respostaB.style.border = "#000 solid 2px";
        respostaD.style.border = "#000 solid 2px";
        resp = selected;
      }
    }
    // Resposta D
    else if (selected == "resposta-D") {

      if (selection == 0) {

        respostaD.style.border = "#2E12DF solid 3px";
        selection++;
        resp = selected;

      } else if (selection == 1) {

        respostaD.style.border = "#2E12DF solid 3px";
        respostaA.style.border = "#000 solid 2px";
        respostaC.style.border = "#000 solid 2px";
        respostaB.style.border = "#000 solid 2px";
        resp = selected;
      }
    }
  });
}

//Verificando a resposta

let contador = 0;
let acertos = 0;

verificar.addEventListener("click", function () {

  // Conferindo se selecionou uma alternativa
  if (resp == null) {

    alert("selecione uma alternativa");
    
  } else if (resp != null) {

    //Questão 1
    if (contador == 0) {

      respostaB.style.border = "#4BAE4F solid 3px";
      let img = respostaB.childNodes[1];
      img.getAttribute("src");
      img.setAttribute("src", "./img/certo-errado/image1.png");

      if (resp == "resposta-B") {

        acertos++;
        contador++;

      } else if (resp != "resposta-B") {

        contador++;

        for (let j = 0; j < alternativas.length; j++) {

          if (alternativas[j].getAttribute("id") == resp) {

            alternativas[j].style.border = "#EC1515 solid 3px";
            let img = alternativas[j].childNodes[1];
            img.getAttribute("src");
            img.setAttribute("src", "./img/certo-errado/image2.png");
          }
        }
      }
      selection = 0;
    }
    //Questão 2
    else if(contador == 1) {
        
        respostaD.style.border = "#4BAE4F solid 3px";
      let img = respostaD.childNodes[1];
      img.getAttribute("src");
      img.setAttribute("src", "./img/certo-errado/image1.png");

      if (resp == "resposta-D") {

        acertos++;
        contador++;

      } else if (resp != "resposta-D") {

        contador++;

        for (let j = 0; j < alternativas.length; j++) {

          if (alternativas[j].getAttribute("id") == resp) {

            alternativas[j].style.border = "#EC1515 solid 3px";
            let img = alternativas[j].childNodes[1];
            img.getAttribute("src");
            img.setAttribute("src", "./img/certo-errado/image2.png");
          }
        }
      }
      selection = 0;
    }
    //Questão 3
    else if(contador == 2) {

        respostaC.style.border = "#4BAE4F solid 3px";
      let img = respostaC.childNodes[1];
      img.getAttribute("src");
      img.setAttribute("src", "./img/certo-errado/image1.png");

      if (resp == "resposta-C") {

        acertos++;
        contador++;

      } else if (resp != "resposta-C") {

        contador++;

        for (let j = 0; j < alternativas.length; j++) {

          if (alternativas[j].getAttribute("id") == resp) {

            alternativas[j].style.border = "#EC1515 solid 3px";
            let img = alternativas[j].childNodes[1];
            img.getAttribute("src");
            img.setAttribute("src", "./img/certo-errado/image2.png");
          }
        }
      }
      selection = 0;
    }

    verificar.classList.add("hide");
    avancar.classList.remove("hide");
  }
});

// Mudando de questão

let number = document.querySelector("#questions .enunciado .number");
let descricao = document.querySelector("#questions .enunciado .descricao");

avancar.addEventListener("click", () => {
    //resetando alternativas
    respostaA.style.border = "#000 solid 2px";
    respostaB.style.border = "#000 solid 2px";
    respostaC.style.border = "#000 solid 2px";
    respostaD.style.border = "#000 solid 2px";
    //Resetando a img
    respostaA.childNodes[1].getAttribute("src");
    respostaA.childNodes[1].setAttribute("src", "./img/img-alternativas/Group 18A.png");
    respostaB.childNodes[1].getAttribute("src");
    respostaB.childNodes[1].setAttribute("src", "./img/img-alternativas/Group 19B.png");
    respostaC.childNodes[1].getAttribute("src");
    respostaC.childNodes[1].setAttribute("src", "./img/img-alternativas/Group 20C.png");
    respostaD.childNodes[1].getAttribute("src");
    respostaD.childNodes[1].setAttribute("src", "./img/img-alternativas/Group 21D.png");

    //Questão 1
    if(contador == 0) {
        //enunciado
        number.textContent = "1.";
        descricao.textContent = "Typically, how many liters of blood does a person have? On average, how many are removed in a blood donation?";
        //alternativas
        respostaA.childNodes[3].textContent = "It has between 2 and 4 liters. 450 milliliters are removed";
        respostaB.childNodes[3].textContent = " It has between 4 and 6 liters. 450 milliliters are removed";
        respostaC.childNodes[3].textContent = "It has 10 liters. 2 liters are removed";
        respostaD.childNodes[3].textContent = "It has 7 liters. 1.5 liters are removed";
    }
    //Questão 2
    else if(contador == 1) {
        //enunciado
        number.textContent = "2.";
        descricao.textContent = "Currently, how many chemical elements does the periodic table have?";
        //alternativas
        respostaA.childNodes[3].textContent = "113";
        respostaB.childNodes[3].textContent = "109";
        respostaC.childNodes[3].textContent = "92";
        respostaD.childNodes[3].textContent = "118";
    }
    //Questão 3
    else if(contador == 2) {

        //enunciado
        number.textContent = "3.";
        descricao.textContent = "What is the name of the president of Brazil who became known as Jango?";
        //alternativas
        respostaA.childNodes[3].textContent = "Jânio Quadros";
        respostaB.childNodes[3].textContent = "Getúlio Vargas";
        respostaC.childNodes[3].textContent = "João Goulart";
        respostaD.childNodes[3].textContent = "João Figueiredo";
    }

    avancar.classList.add("hide");
    verificar.classList.remove("hide");
})
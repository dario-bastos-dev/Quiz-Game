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

let paginaFinal = document.querySelector("#pagina-final");
let emoteAcertos = document.querySelector("#pagina-final .emote");
let textoAcertos = document.querySelector("#pagina-final .texto-acertos");
let btnRecomecar = document.querySelector("#pagina-final #recomecar");

let contador = 0;
let acertos = 0;

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
    //Questão 4
    else if(contador == 3) {

        respostaA.style.border = "#4BAE4F solid 3px";
      let img = respostaA.childNodes[1];
      img.getAttribute("src");
      img.setAttribute("src", "./img/certo-errado/image1.png");

      if (resp == "resposta-A") {

        acertos++;
        contador++;

      } else if (resp != "resposta-A") {

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
    //Questão 5
    else if(contador == 4) {

        respostaA.style.border = "#4BAE4F solid 3px";
      let img = respostaA.childNodes[1];
      img.getAttribute("src");
      img.setAttribute("src", "./img/certo-errado/image1.png");

      if (resp == "resposta-A") {

        acertos++;
        contador++;

      } else if (resp != "resposta-A") {

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
    //Questão 6
    else if(contador == 5) {

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
    //Questão 7
    else if(contador == 6) {

        respostaA.style.border = "#4BAE4F solid 3px";
      let img = respostaA.childNodes[1];
      img.getAttribute("src");
      img.setAttribute("src", "./img/certo-errado/image1.png");

      if (resp == "resposta-A") {

        acertos++;
        contador++;

      } else if (resp != "resposta-A") {

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
    //Questão 8
    else if(contador == 7) {

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
    //Questão 9
    else if(contador == 8) {

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
    //Questão 10
    else if(contador == 9) {

        respostaC.style.border = "#4BAE4F solid 3px";
      let img = respostaC.childNodes[1];
      img.getAttribute("src");
      img.setAttribute("src", "./img/certo-errado/image1.png");

      if (resp == "resposta-C") {
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

        avancar.classList.add("hide");
        verificar.classList.remove("hide");
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

        avancar.classList.add("hide");
        verificar.classList.remove("hide");
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

        avancar.classList.add("hide");
        verificar.classList.remove("hide");
    }
    //Questão 4
    else if(contador == 3) {

      //enunciado
      number.textContent = "4.";
      descricao.textContent = "Where did the electric shower come from?";
      //alternativas
      respostaA.childNodes[3].textContent = "France";
      respostaB.childNodes[3].textContent = "England";
      respostaC.childNodes[3].textContent = "Brazil";
      respostaD.childNodes[3].textContent = "Australia";

      avancar.classList.add("hide");
      verificar.classList.remove("hide");
  }
    //Questão 5
    else if(contador == 4) {

      //enunciado
      number.textContent = "5.";
      descricao.textContent = "What are the smallest and largest countries in the world?";
      //alternativas
      respostaA.childNodes[3].textContent = "Vatican and Russia";
      respostaB.childNodes[3].textContent = "Nauru and China";
      respostaC.childNodes[3].textContent = "Monaco and Canada";
      respostaD.childNodes[3].textContent = "Malta and the United States";

      avancar.classList.add("hide");
      verificar.classList.remove("hide");
  }
    //Questão 6
    else if(contador == 5) {

      //enunciado
      number.textContent = "6.";
      descricao.textContent = "What is the minimum number of players on each team in a football match?";
      //alternativas
      respostaA.childNodes[3].textContent = "8";
      respostaB.childNodes[3].textContent = "10";
      respostaC.childNodes[3].textContent = "9";
      respostaD.childNodes[3].textContent = "7";

      avancar.classList.add("hide");
      verificar.classList.remove("hide");
  }
    //Questão 7
    else if(contador == 6) {

      //enunciado
      number.textContent = "7.";
      descricao.textContent = "Which countries have the highest and lowest life expectancy in the world?";
      //alternativas
      respostaA.childNodes[3].textContent = "Japan and Sierra Leone";
      respostaB.childNodes[3].textContent = "Australia and Afghanistan";
      respostaC.childNodes[3].textContent = "Italy and Chad";
      respostaD.childNodes[3].textContent = "Brazil and Congo";

      avancar.classList.add("hide");
      verificar.classList.remove("hide");
  }
    //Questão 8
    else if(contador == 7) {

      //enunciado
      number.textContent = "8.";
      descricao.textContent = "O que a palavra legend significa em português?";
      //alternativas
      respostaA.childNodes[3].textContent = "Legenda";
      respostaB.childNodes[3].textContent = "Conto";
      respostaC.childNodes[3].textContent = "História";
      respostaD.childNodes[3].textContent = "Lenda";

      avancar.classList.add("hide");
      verificar.classList.remove("hide");
  }
    //Questão 9
    else if(contador == 8) {

      //enunciado
      number.textContent = "9.";
      descricao.textContent = "What two dates are celebrated in November?";
      //alternativas
      respostaA.childNodes[3].textContent = "Brazilian Independence and Flag Day";
      respostaB.childNodes[3].textContent = "Proclamation of the Republic and Black Consciousness Day";
      respostaC.childNodes[3].textContent = "Doctor's Day and Saint Luke's Day";
      respostaD.childNodes[3].textContent = "All Souls' Day and National Book Day";

      avancar.classList.add("hide");
      verificar.classList.remove("hide");
  }
    //Questão 10
    else if(contador == 9) {

      //enunciado
      number.textContent = "10.";
      descricao.textContent = "Which of the alternatives presents the Presidents of Brazil in order of succession?";
      //alternativas
      respostaA.childNodes[3].textContent = "Dilma Rousseff, Lula, Jair Bolsonaro, Lula";
      respostaB.childNodes[3].textContent = "Lula, Michel Temer, Jair Bolsonaro, Lula";
      respostaC.childNodes[3].textContent = "Dilma Rousseff, Michel Temer, Jair Bolsonaro, Lula";
      respostaD.childNodes[3].textContent = "Collor, Lula, Jair Bolsonaro, Lula";

      avancar.classList.add("hide");
      verificar.classList.remove("hide");
  }

  // Página de finalização
  else if(contador == 10) {

    // Mostrando página final
    questions.setAttribute("class", "hide");

    paginaFinal.removeAttribute("class");

  // Mostrnado núnero de acertos
    if(acertos <= 5) {

      emoteAcertos.getAttribute("src");
      emoteAcertos.setAttribute("src", "./img/emotes/image-5.png")

      let texto = `Você acertou ${acertos}/10!`
      textoAcertos.textContent = texto;
    }

    else if(acertos <= 9 && acertos > 5) {

      emoteAcertos.getAttribute("src");
      emoteAcertos.setAttribute("src", "./img/emotes/image-3.png")

      let texto = `Parabéns! Você acertou ${acertos}/10!`
      textoAcertos.textContent = texto;
    }
    else if(acertos == 10) {

      emoteAcertos.getAttribute("src");
      emoteAcertos.setAttribute("src", "./img/emotes/image-4.png")

      let texto = `Parabéns! Você acertou ${acertos}/10!`
      textoAcertos.textContent = texto;
    }
  }
})
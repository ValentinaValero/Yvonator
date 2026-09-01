const acertou = document.getElementById("acertou");
const errou = document.getElementById("errou");

const modalErro = document.getElementById("modalErro");
const tentarNovamente = document.getElementById("tentarNovamente");



errou.addEventListener("click", function () {

    modalErro.style.display = "flex";

});




// Fechar ao clicar no fundo cinza

modalErro.addEventListener("click", function (event) {

    if (event.target === modalErro) {
        modalErro.style.display = "none";
    }

});
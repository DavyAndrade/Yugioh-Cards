const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    esconderCartaoSelecionado();
    cartaoAtual = 0;
    mostrarCartao(cartaoAtual);
    return;
  } else {
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
  }
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) {
    esconderCartaoSelecionado();

    cartaoAtual = cartoes.length - 1;

    mostrarCartao(cartaoAtual);
  } else {
    esconderCartaoSelecionado();

    cartaoAtual--;

    mostrarCartao(cartaoAtual);
  }
});

function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

const botoes = document.querySelectorALL("button");
botoes..forEach(function (botao) {
    let curtiu= false;
    botao.addEventListener("click" , botaoClicado);
    function botaoClicado(){
        if (curtiu === false) {
            texto.textContent++;
            curtiu= true;
        }else {
            textContent--;
            curtiu =false;
        }
    }
}
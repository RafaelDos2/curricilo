//pegando componentes em tela e armazenando em variáveis
var botaoMenubar = document.querySelector('#botaoMenu');
var menuLateral = document.querySelector('#menu-lateral-id');
var fundomenu = document.querySelector('#fundo-menu-id');
var linkesMenu = document.querySelectorAll(".lista-menu a")

//função executa uma ação
function abrirFecharMenu(){
    menuLateral.classList.toggle("aberto");
    fundomenu.classList.toggle("visivel");
}

botaoMenu.addEventListener("click", abrirFecharMenu);
fundomenu.addEventListener("click", abrirFecharMenu)

linkesMenu.forEach(function(links){
    links.addEventListener("click", abrirFecharMenu);
});

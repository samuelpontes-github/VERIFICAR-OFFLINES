// ==UserScript==
// @name         GERADOR DE LISTA V3
// @namespace    http://tampermonkey.net/
// @version      2024-07-16
// @description  try to take over the world!
// @author       You
// @match        https://integra.bradocarrastreamento.com.br/paginas/monitoramento.php*
// @icon         https://play-lh.googleusercontent.com/b0uvf3B0inzrT8sFk4OSC5cRGUseDRp9ld5WDT01ljJcNWHhFJJijdXw2cd6_OQIGKs
// @grant        none
// ==/UserScript==

document.getElementsByClassName('page-meta')[0].innerHTML = '<nav class="breadcrumb-style-one" aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item active" aria-current="page"><h2>Histórico de Monitoramento</h2></li></ol><button aria-controls="html5-extension" tabindex="0" class="button-start-script btn _effect--ripple waves-light"><span>GERAR LISTA</span></button></nav>'

var pagelink_length = 0

// A VARIÁVEL TOTALPAGINAS SERVE PRA EU SABER QUANTAS PÁGINAS ESTÃO APARECENDO NA LISTA DE OCORRÊNCIAS

var totalpaginas = 0

// COMO A PÁGINA 1 VAI ESTAR SELECIONADA, ENTÃO VAI TROCAR PARA AS PRÓXIMAS
// PÁGINAS DEPOIS DO 1 (2,3,4,5...) POR ISSO O NUMBERPAGE VAI FICAR DEFINIDO COM O NÚMERO 1

var numberpage = 1
var paginaatual = 0

var placas = []
const lista_desconsiderar = ["ESTÂNCIA", "OFICINA DO JAJÁ", "BRADOCAR", "GIACOMO SORTINO", "LOJA DE MAUA"];

var gerarlista_clickado = false

//ESSA FUNÇÃO SERVE PARA DETECTAR QUANDO O BOTÃO DE GERAR LISTA FOR CLICADO
document.getElementsByClassName('button-start-script')[0].addEventListener("click", function() {

    if (gerarlista_clickado == false){
    gerarlista_clickado = true
    console.log("O BOTÃO DE GERAR LISTA FOI CLICADO !")

    pagelink_length = document.getElementsByClassName('page-link').length

    totalpaginas = document.getElementsByClassName('page-link')[pagelink_length-2].innerText
    totalpaginas = parseInt(totalpaginas)

    numberpage = 1
    placas = []

    paginaatual = document.getElementsByClassName('paginate_button page-item active')[0].innerText
    paginaatual = parseInt(paginaatual)

    console.log("A PÁGINA SELECIONADA ATUALMENTE É A PÁGINA ", paginaatual)

        if (totalpaginas == 1) {
            verificareventos()
        }

        // O WHILE SERVE PARA EXECUTAR A FUNÇÃO DE MUDAR PÁGINA ATÉ CHEGAR NA ÚLTIMA PÁGINA
        while (numberpage < totalpaginas) {
            console.log('WHILE EXECUTADO')

            if (numberpage == 1) {
                verificareventos()
            }
            delayfunction(numberpage)
            numberpage++
        }
    }else{
        console.log("O BOTÃO DE GERAR LISTA FOI CLICADO, MAS O SCRIPT JÁ ESTÁ RODANDO !")
    }
});

function verificareventos(){
    var totalcolunaeventos = document.getElementsByTagName('tbody')[0].children.length
    var verificados = 0
    var rastreadorpos = 8

    var placa = 1

    setTimeout(function(){
        while (verificados < totalcolunaeventos){
            var detalhes = document.getElementsByTagName('td')[rastreadorpos].innerText
            let desconsiderar = false;

            for (let i = 0; i < lista_desconsiderar.length; i++) {
                if (detalhes.includes(lista_desconsiderar[i])) {
                    console.log(lista_desconsiderar[i] + ' foi encontrado no detalhe, então '+ document.getElementsByTagName('td')[placa].innerText + ' não vai ser considerado !')
                    desconsiderar = true;
                    break
                }
            }

            if (desconsiderar == false) {
                console.log(desconsiderar)
                if (detalhes.indexOf('PRINCIPAL') != -1) {
                    placas.push([document.getElementsByTagName('td')[placa].innerText, 'RASTREADOR PRINCIPAL'])
                }

                if (detalhes.indexOf('SOMBRA') != -1) {
                    if (detalhes.indexOf('MIGRADO') != -1) {
                        placas.push([document.getElementsByTagName('td')[placa].innerText, 'RASTREADOR SOMBRA MIGRADO'])
                    } else {
                        placas.push([document.getElementsByTagName('td')[placa].innerText, 'RASTREADOR SOMBRA'])
                    }
                } else {
                    if (detalhes.indexOf('MIGRADO') != -1) {
                       placas.push([document.getElementsByTagName('td')[placa].innerText, 'RASTREADOR MIGRADO'])
                    }
                }
            }
            placa = placa+10
            rastreadorpos = rastreadorpos+10
            verificados = verificados+1
        }
    }, 3000)

    if (paginaatual == totalpaginas) {
        setTimeout(function(){
            console.log("A LISTA DAS PLACAS VAI SER GERADA EM 3 SEGUNDOS")
            setTimeout(function(){
                console.log(placas)
                gerarlista_clickado = false
            }, 9000)
        }, 6000)
    }
}

// ESSA FUNÇÃO FAZ MUDAR PARA A PRÓXIMA PÁGINA
function proximapagina(){
    paginaatual = paginaatual+1
    console.log("A PÁGINA SELECIONADA ATUALMENTE É A PÁGINA ", paginaatual)

    document.getElementsByClassName('page-link')[pagelink_length-1].click()
    console.log("CLICOU NO BOTÃO PRÓXIMO")

    verificareventos()
}

// ESSA FUNÇÃO SERVE PARA DEFINIR QUANTO TEMPO O WHILE VAI TER QUE ESPERAR PARA SER EXECUTADO NOVAMENTE
function delayfunction(i){
  setTimeout(function(){
    console.log(i);
    proximapagina();
    console.log("QUANTOS MILISEGUNDOS ESPEROU PRA EXECUTAR DENOVO: ", 10000 * i);
  }, 10000 * i)
}

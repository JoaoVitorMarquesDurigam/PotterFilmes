const mudarlanca = document.querySelector(".lancamento")
const mudarloca = document.querySelector(".localizacao")
const mudardire = document.querySelector(".diretor")
const mudarprod = document.querySelector(".produtor")
const mudarnumato = document.querySelector(".numatores")
const mudaravaliacao = document.querySelector(".avaliacao")
const mudartitulo = document.querySelector("#titulofilme")
const mudarcapa = document.querySelector("#capafilme")

let numfilme = 1

function filmeavancar(){
    if(8 > numfilme){
        numfilme++
        console.log(numfilme)
        mudardados()
    }
    else{
        numfilme = 8
    }
}
function filmevoltar(){
    if(1 < numfilme){
        numfilme--
        console.log(numfilme)
        mudardados()
    }
    else{
        numfilme = 1
    }
}


function mudardados(){
    if(numfilme == 1){
        mudartitulo.textContent = "Harry Potter e a Pedra Filosofal"
        mudarcapa.src = "img/imgfilmes/1-capafilmepedrafilosofal.png"
        mudaravaliacao.textContent = "4.5"
        mudarlanca.textContent = "Lançamento: 23/11/2001"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: Chris Columbus"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 25"
    }
    else if(numfilme == 2){
        mudartitulo.textContent = "Harry Potter e a Câmara Secreta"
        mudarcapa.src = "img/imgfilmes/2-camarasecreta.png"
        mudaravaliacao.textContent = '4.6'
        mudarlanca.textContent = "Lançamento: 22/11/2002"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: Chris Columbus"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 25"
    }
    else if(numfilme == 3){
        mudartitulo.textContent = "Harry Potter e o Prisioneiro de Azkaban"
        mudarcapa.src = "img/imgfilmes/3-prisioneirodeazkaban.png"
        mudaravaliacao.textContent = '4.6'
        mudarlanca.textContent = "Lançamento: 04/06/2004"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: Alfonso Cuarón"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 28"
    }
    else if(numfilme == 4){
        mudartitulo.textContent = "Harry Potter e o Cálice de Fogo"
        mudarcapa.src = "img/imgfilmes/4-calicedefogo.png"
        mudaravaliacao.textContent = '4.6'
        mudarlanca.textContent = "Lançamento: 25/11/2005"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: Mike Newell"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 30"
    }
    else if(numfilme == 5){
        mudartitulo.textContent = "Harry Potter e a Ordem da Fênix"
        mudarcapa.src = "img/imgfilmes/5-ordemdafenix.png"
        mudaravaliacao.textContent = '4.5'
        mudarlanca.textContent = "Lançamento: 11/07/2007"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: David Yates"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 30"
    }
    else if(numfilme == 6){
        mudartitulo.textContent = "Harry Potter e o Enigma do Príncipe"
        mudarcapa.src = "img/imgfilmes/6-enigmadoprincipe.png"
        mudaravaliacao.textContent = '4.5'
        mudarlanca.textContent = "Lançamento: 15/07/2009"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: David Yates"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 28"
    }
    else if(numfilme == 7){
        mudartitulo.textContent = "Harry Potter e as Relíquias da Morte – Parte 1"
        mudarcapa.src = "img/imgfilmes/7-reliquias1.png"
        mudaravaliacao.textContent = '4.5'
        mudarlanca.textContent = "Lançamento: 19/11/2010"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: David Yates"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 30"
    }
    else if(numfilme == 8){
        mudartitulo.textContent = "Harry Potter e as Relíquias da Morte – Parte 2"
        mudarcapa.src = "img/imgfilmes/8-reliquias2.png"
        mudaravaliacao.textContent = '4.6'
        mudarlanca.textContent = "Lançamento: 15/07/2011"
        mudarloca.textContent = "Localização: Reino Unido"
        mudardire.textContent = "Diretor: David Yates"
        mudarprod.textContent = "Produtor: David Heyman"
        mudarnumato.textContent = "Numero de Atores: 30"
    }
}


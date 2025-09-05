const mudarlanca = document.querySelector(".lancamento")
const mudarloca = document.querySelector(".localizacao")
const mudardire = document.querySelector(".diretor")
const mudarprod = document.querySelector(".produtor")
const mudarnumato = document.querySelector(".numatores")
const mudaravaliacao = document.querySelector(".avaliacao")
const mudartitulo = document.querySelector("#titulofilme")
const mudarcapa = document.querySelector("#capafilme")

// Seção da dor, atores.
const mudarator1 = document.querySelector(".atorimg1")
const mudarator2 = document.querySelector(".atorimg2")
const mudarator3 = document.querySelector(".atorimg3")
const mudarator4 = document.querySelector(".atorimg4")
const mudarator5 = document.querySelector(".atorimg5")
const mudarator6 = document.querySelector(".atorimg6")

const mudaratodesc1 = document.querySelector(".atordesc1")
const mudaratodesc2 = document.querySelector(".atordesc2")
const mudaratodesc3 = document.querySelector(".atordesc3")
const mudaratodesc4 = document.querySelector(".atordesc4")
const mudaratodesc5 = document.querySelector(".atordesc5")
const mudaratodesc6 = document.querySelector(".atordesc6")

let numfilme = 1

function filmeavancar(){
    if(8 > numfilme){
        numfilme++
        console.log(numfilme)
        mudardados()
        mudaratores()
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
        mudaratores()
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

function mudaratores(){
    if(numfilme == 1){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc1.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/4-minerva.png"
        mudaratodesc2.textContent = "Maggie Smith como Minerva McGonagall"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/3-draco.png"
        mudaratodesc3.textContent = "Tom Felton como Draco Malfoy"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/1-neville.png"
        mudaratodesc4.textContent = "Matthew Lewis como Neville Longbottom"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/5-quirrell.png"
        mudaratodesc5.textContent = "Ian Hart como Quirino Quirrell"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/6-filch.png"
        mudaratodesc6.textContent = "David Bradley como Argo Filch"
    }
    else if(numfilme == 2){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc1.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/4-minerva.png"
        mudaratodesc2.textContent = "Maggie Smith como Minerva McGonagall"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/3-draco.png"
        mudaratodesc3.textContent = "Tom Felton como Draco Malfoy"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/12-ginny.png"
        mudaratodesc4.textContent = "Bonnie Wright como Ginny Weasley"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/8-tomriddle.png"
        mudaratodesc5.textContent = "Christian Coulson como Tom Riddle"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/9-gilderoy.png"
        mudaratodesc6.textContent = "James Walters como Gilderoy Lockhart"
    }
    else if(numfilme == 3){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/11-sirius.png"
        mudaratodesc1.textContent = "Gary Oldman como Sirius Black"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/7-remus.png"
        mudaratodesc2.textContent = "David Thewlis como Remo Lupin"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc3.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/4-minerva.png"
        mudaratodesc4.textContent = "Maggie Smith como Minerva McGonagall"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/3-draco.png"
        mudaratodesc5.textContent = "Tom Felton como Draco Malfoy"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/10-pettigrew.png"
        mudaratodesc6.textContent = "Timothy Spall como Pedro Pettigrew"
    }
    else if(numfilme == 4){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/11-sirius.png"
        mudaratodesc1.textContent = "Gary Oldman como Sirius Black"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/13-cedrico.png"
        mudaratodesc2.textContent = "Robert Pattinson como Cedrico Diggory"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc3.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/4-minerva.png"
        mudaratodesc4.textContent = "Maggie Smith como Minerva McGonagall"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/3-draco.png"
        mudaratodesc5.textContent = "Tom Felton como Draco Malfoy"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/14-delacour.png"
        mudaratodesc6.textContent = "Clémence Poésy como Fleur Delacour"
    }
    else if(numfilme == 5){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/11-sirius.png"
        mudaratodesc1.textContent = "Gary Oldman como Sirius Black"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/15-dolores.png"
        mudaratodesc2.textContent = "Imelda Staunton como Dolores Umbridge"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/1-neville.png"
        mudaratodesc3.textContent = "Matthew Lewis como Neville Longbottom"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/17-lunalovegood.png"
        mudaratodesc4.textContent = "Evanna Lynch como Luna Lovegood"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc5.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/16-chochang.png"
        mudaratodesc6.textContent = "Katie Leung como Cho Chang"
    }
     else if(numfilme == 6){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/3-draco.png"
        mudaratodesc1.textContent = "Tom Felton como Draco Malfoy"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/18-bellatrix.png"
        mudaratodesc2.textContent = "Helena Bonham Carter como Belatriz Lestrange"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/1-neville.png"
        mudaratodesc3.textContent = "Matthew Lewis como Neville Longbottom"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/19-horace.png"
        mudaratodesc4.textContent = "Jim Broadbent como Horace Slughorn"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc5.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/12-ginny.png"
        mudaratodesc6.textContent = "Bonnie Wright como Ginny Weasley"
    }
    else if(numfilme == 7){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/3-draco.png"
        mudaratodesc1.textContent = "Tom Felton como Draco Malfoy"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/18-bellatrix.png"
        mudaratodesc2.textContent = "Helena Bonham Carter como Belatriz Lestrange"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/1-neville.png"
        mudaratodesc3.textcontent = "Matthew Lewis como Neville Longbottom"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/17-lunalovegood.png"
        mudaratodesc4.textContent = "Evanna Lynch como Luna Lovegood"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc5.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/12-ginny.png"
        mudaratodesc6.textContent = "Bonnie Wright como Ginny Weasley"
    }
     else if(numfilme == 8){
        mudarator1.src = "img/imgpersonagems/personagemssecundarios/3-draco.png"
        mudaratodesc1.textContent = "Tom Felton como Draco Malfoy"
        mudarator2.src = "img/imgpersonagems/personagemssecundarios/4-minerva.png"
        mudaratodesc2.textContent = "Maggie Smith como Minerva McGonagall"
        mudarator3.src = "img/imgpersonagems/personagemssecundarios/1-neville.png"
        mudaratodesc3.textContent = "Matthew Lewis como Neville Longbottom"
        mudarator4.src = "img/imgpersonagems/personagemssecundarios/17-lunalovegood.png"
        mudaratodesc4.textContent = "Evanna Lynch como Luna Lovegood"
        mudarator5.src = "img/imgpersonagems/personagemssecundarios/2-hagrid.png"
        mudaratodesc5.textContent = "Martin Bayfield como Rúbeo Hagrid"
        mudarator6.src = "img/imgpersonagems/personagemssecundarios/12-ginny.png"
        mudaratodesc6.textContent = "Bonnie Wright como Ginny Weasley"
    }
}
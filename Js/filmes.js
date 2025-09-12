const mudarlanca = document.querySelector(".lancamento")
const mudarloca = document.querySelector(".localizacao")
const mudardire = document.querySelector(".diretor")
const mudarprod = document.querySelector(".produtor")
const mudarnumato = document.querySelector(".numatores")
const mudaravaliacao = document.querySelector(".avaliacao")
const mudartitulo = document.querySelector("#titulop")
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

const mudarresumo = document.querySelector(".textoresumo")

let numfilme = 1
/* let opacidade = 1 */

function filmeavancar(){
    if(8 > numfilme){
        numfilme++
        console.log(numfilme)
        mudardados()
        mudaratores()
        resumofilmes()
        
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
        resumofilmes()
        
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

function resumofilmes(){
    if(numfilme == 1){
    mudarresumo.textContent = "Harry Potter é um garoto orfão de 11 que vive junto com seus tios, os Dursley, dentro de condições ruims. Um dia, harry varias cartas de convite para Hogwarts, uma renomada escola de magia. Em hogwarts, harry aprende sobre o mundo dos bruxos, sua conexão com o temido bruxo voldemort, a verdade sobre a morte de seus pais e faz dois grandes amigos, Ron Weasley e Hermione Granger, enquanto tentam defender a pedra filosofal de cair em mãos erradas. Esse filme serve como a introdução ao universo de harry potter, estabelecendo os protagonistas e antagonistas, junto com como mundo da magia funciona."
    }
    if(numfilme == 2){
    mudarresumo.textContent = "Após passar um verão horrivel na casa de seus tios sem poder usar magia e sem receber cartas de seus novos amigos, Harry encontra Dobby, um elfo-doméstico que esteve interceptando todas as cartas enviadas por Ron e Hermione para Impedir harry de voltar para hogwarts, pois ele vai entrar em um perigo mortal caso volte. Harry, sentindo saudade de hogwarts e seus amigos, ignora os avisos de Dobby e decide voltar a hogwarts. Após uma serie da acontecimentos na escola de magia, Harry e seus amigos decidem procurar a raiz dos acontecimentos, assim descobrindo sobre a existencia de uma camara secreta dentro de hogwarts."
    }
    if(numfilme == 3){
    mudarresumo.textContent = "Com mais um verão insatisfatorio na casa de seus tios, Harry, enquando lé um livro usando o feitiço Lumos Maxima, ouve sua tia Guida Dursley insultar seus pais, o que faz harry perder a paciência. Como vingança, harry causa sua tia a inflar e flutuar como um balão. Harry decide fugir da casa de seus tios, indo para o Caldeirão Furado para ser perdoado por usar magia fora de hogwarts. Logo após, harry descobre que um servo de Voldemort, Sirius Black, está a sua procura. Durante o trem para hogwarts, o trio é atacado por Dementadores, mas são salvos pelo novo professor de magia, Remo Lupin, porem harry desmaia por causa do ataque."
    }
    if(numfilme == 4){
    mudarresumo.textContent = "Enquanto Harry, junto de seus amigos, visitam a Copa Mundial de Quadribol até que o acampamento deles é atacado pelos Comensais da morte, antigos servos de voldemort. Sendo nocauteado durante a fuga, Harry ouve alguem invocar o simbolo de voldemort, a marca negra, antes de ser salvo por Hermione e Ron. Logo após isso, Dumbledore informa aos alunos que o torneio Tribruxo terá hogwarts como sua sede. Com isso, duas outras escolas chegam em hogwarts para competir,  Beauxbatons e Durmstrang. A cálice escolha treis alunos para representar suas escolhas, mas um quarto escolhe um quarto campeão, para a surpresa de todos."
    }
    if(numfilme == 5){
    mudarresumo.textContent = "No quinto ano de Harry Potter em Hogwarts, o mundo bruxo se recusa a acreditar que Lord Voldemort retornou. Ignorado pelo Ministério da Magia e assombrado por pesadelos sombrios, Harry enfrenta um novo e opressor regime na escola, liderado pela cruel professora Dolores Umbridge. Com a ajuda de seus amigos Rony e Hermione, ele forma a Armada de Dumbledore, um grupo secreto de estudantes que aprende a se defender contra as artes das trevas. Enquanto isso, a misteriosa Ordem da Fênix, uma sociedade secreta que luta contra Voldemort,se mobiliza nas sombras."
    }
    if(numfilme == 6){
    mudarresumo.textContent = "Em seu sexto ano em Hogwarts, Harry descobre mais sobre o passado de Lord Voldemort com a ajuda do professor Dumbledore, que o prepara para a batalha final. Enquanto isso, um antigo livro de Poções pertencente a um misterioso “Príncipe Mestiço” dá a Harry habilidades surpreendentes — mas também o aproxima de segredos perigosos. O perigo se infiltra na escola, Draco Malfoy age em segredo, e um plano sombrio ameaça o coração de Hogwarts. No meio disso tudo, o amor e a perda se entrelaçam, marcando o início do fim para o mundo bruxo como Harry conhece."
    }
    if(numfilme == 7){
    mudarresumo.textContent = "O mundo bruxo mergulha no caos. Voldemort assumiu o controle do Ministério da Magia e está caçando todos os que se opõem a ele — especialmente Harry Potter. Sem a proteção de Hogwarts, Harry, Rony e Hermione partem em uma perigosa missão para destruir as Horcruxes, fragmentos da alma de Voldemort. Sozinhos, enfrentando traições, perdas e o peso de um futuro incerto, eles descobrem a lenda das Relíquias da Morte — três artefatos mágicos que podem mudar o rumo da guerra. Enquanto o perigo cresce e a esperança enfraquece, a amizade dos três é colocada à prova como nunca antes."
    }
    if(numfilme == 8){
    mudarresumo.textContent = "No desfecho da saga, Harry, Rony e Hermione retornam a Hogwarts para destruir as últimas Horcruxes e acabar de vez com Voldemort. A escola se torna o campo de uma batalha épica entre as forças das trevas e aqueles que ainda resistem. Enquanto o mundo bruxo desmorona ao redor deles, verdades profundas são reveladas — sobre Dumbledore, Snape e o próprio Harry. Em meio a perdas dolorosas e atos de coragem, Harry precisa encarar seu destino: o confronto final com Voldemort."
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

 const secret = document.querySelector("#rowlingimg")
 const wild = document.querySelector("#imgharry")
 const haha = new Audio("img/somsecreto.mp3")
 const hunt = document.querySelector("#background")
 const aura = document.querySelector("#aurafarm")
 const falas = document.querySelector("#falas")
 const vida = document.querySelector("#vida")
 const thelord = document.querySelector("#hogwarts")
 const hongyuan = document.querySelector("#textohog") 
 const walksalone = document.querySelector("#lord")
 const wildhunt = document.querySelector("#sagatitulo")
 const wikihunt = document.querySelector("#sagaexplicacao")

function segredofoda(){
   secret.src = "img/segredofoda.jpg.png"
   wild.src = "img/wild.jpeg"
   hunt.style.backgroundImage = "url('img/hunt.png')"
   thelord.style.backgroundImage = "url('img/thelord.png')"
   hongyuan.textContent = "Hongyuan"
   walksalone.textContent = "The lord of hongyuan rules alone."
   wildhunt.textContent = "THE WILD HUNT"
   falas.style.display = "none"
   vida.style.display = "none"
   aura.play()
   haha.play()
}
const grid = document.querySelector(".grid-container")
const celulas = document.querySelectorAll(".grid-item")

const frase = ["Pensei que você tinha morrido", "Vo leva esses menino pra igreja", "Vinitim sapeca",
"Vo da um beijo no Darccelio", "Darccelio pelado", "Gustavo diácono", "Programar é melhor que namora",
"Rasgado", "Você não vai chega na minha idade", "Não vo ler em inglês", "Nubank", "Investimento",
"Pita e toma um café", "Queijo canastra", "Quem vai paga a coca", "Me manda um e-mail", "Vo te leva pra igreja",
"Te filho é bom demais", "Cachaça", "Carniça", "Não pode xinga", "Não conta pro pastor", "Mochila de criança",
"Sapeca", "Torço pra que sua situação piore", "Dartchelio", "Fanfarrão", "Mas Jefferson", "Nois que é pobre"]

let sorteados = []

function completarCelulas(){
    let myArray = Array.from(celulas)
    console.log(myArray)
    myArray.forEach(element => {
        let sort =  Math.floor(Math.random() * frase.length)
        if(element.getAttribute("id") != "celula13"){
            element.innerHTML = frase[sort]
            frase.splice(sort, 1)
        }
    });
}

completarCelulas()

function selecionar(event){
    console.log(event.target.getAttribute('class'))
    if (event.target.getAttribute('class') == "grid-item escolhido"){
        event.target.classList.remove("escolhido")
    }else{
        event.target.classList.add("escolhido")
    }
}

grid.addEventListener('click', selecionar)
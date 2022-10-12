const container2 = document.getElementById("container2")
const img = document.getElementById("img")
const character = document.getElementById("character")
const quote = document.getElementById("quote")
const btnSearch = document.getElementById("btnSearch")

let url = "https://thesimpsonsquoteapi.glitch.me/quotes"

btnSearch.addEventListener('click',newApi)

function newApi(){
    fetch(url)
    .then(response => response.json())
    .then(
        data=>{
            img.setAttribute('src',(data[0].image)),
            character.textContent = data[0].character,
            quote.textContent = data[0].quote
        }
    )
}
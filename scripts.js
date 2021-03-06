//alert("Hola mundo");

const form = document.getElementById("pokemon-form");
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const elementName = document.getElementById("pokemon-name");
const elementImage = document.getElementById("pokemon-image")

form.addEventListener("submit", function (element) {
    element.preventDefault();
    
    const inputId = form[0];
    const id = inputId.value;
    fetchPokemon(id);
})

function fetchPokemon(id){
    let name = "";

    fetch(API_URL+id).then(function (response){
        return response
    }).then( function (response) {
        return response.json();
    }).then(function (pokemonData) {
        name = pokemonData.name;
        elementName.innerHTML = name;
        elementImage.setAttribute("src",pokemonData.sprites.other.dream_world.front_default)
    }).catch(function () {
        alert("No se encontrĂ³ el pokemon")
    })
}

document.addEventListener("DOMContentLoaded", function() {
    //fetchPokemon(150)
})
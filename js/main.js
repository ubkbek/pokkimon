// document variables
var elList = document.querySelector("#list");
var elPokimonsList = pokemons.slice(0);

function renderPokemons(array, place){

    place.innerHTML = null;

    // loop for array
    for (const item of array) {
        var newItem = document.createElement("LI");
        newItem.setAttribute("class", " d-flex flex-column align-items-center col-3 mb-4")

        // created <div> element
        var newDiv = document.createElement("DIV");
        newDiv.setAttribute("class", "shadow-list bg-white align-content-center py-0 px-5 rounded-3 shadow shadov")


        // created <img> element
        var newImg = document.createElement("IMG");
        newImg.setAttribute("class", "d-block");
        newImg.setAttribute("src", item.img);
        newImg.setAttribute("alt", "image");
        newImg.setAttribute("width", "200");
        newImg.setAttribute("height", "200");


        // created <h3> element
        var newH3 = document.createElement("H3");
        newH3.setAttribute("class", "mb-3");
        newH3.textContent = item.name;

        // created <h4> element
        var newH4 = document.createElement("H4");
        newH4.setAttribute("class", "h6");
        newH4.textContent = item.type;


        // created <p> element
        var newP1 = document.createElement("P");
        newP1.classList.add("h6");
        newP1.textContent = item.weight;


        // created <p> element
        var newP2 = document.createElement("P");
        newP2.classList.add("h6");
        newP2.textContent = item.height;

        // join with appendChild
        newDiv.appendChild(newImg);
        newDiv.appendChild(newH3);
        newDiv.appendChild(newH4);
        newDiv.appendChild(newP1);
        newDiv.appendChild(newP2);
        newItem.appendChild(newDiv)
        place.appendChild(newItem)
    }
}

//run the function
renderPokemons(elPokimonsList, elList);
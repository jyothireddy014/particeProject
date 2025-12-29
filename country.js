let userInput = document.getElementById("countries");
let roller = document.getElementById("roller");
let container = document.getElementById("container-element");

let value = "";

function createAndAppendData(country){

    
    let divContainer = document.createElement("div");
    divContainer.classList.add("d-flex","flex-row","col-11","col-lg-4","ml-auto","mr-auto","shadow","mb-3");
    container.appendChild(divContainer);

    let image = document.createElement("img");
    image.src=country.flag;
    image.classList.add("w-25","m-2");
    divContainer.appendChild(image);

    let divContainerEl = document.createElement("div");
    divContainerEl.classList.add("d-flex","flex-column","p-4");
    divContainer.appendChild(divContainerEl);

    let para = document.createElement("p");
    para.textContent = country.name;
    divContainerEl.appendChild(para);

    let paraEl = document.createElement("p");
    paraEl.textContent = country.population;
    divContainerEl.appendChild(paraEl);

}

function displayCountries(){
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        roller.classList.add("d-none");
        container.textContent = "" ;
        for (let country of jsonData){
            if (country.name.toLowerCase().includes(value.toLowerCase())){
                createAndAppendData(country);
            }
        }
    });

}


function functionCallback(event){
    roller.classList.remove("d-none");
    value = event.target.value;
    displayCountries();
}

displayCountries();

userInput.addEventListener("keyup",functionCallback);


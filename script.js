//selecting elements of html
const head = document.querySelector("h1");
const headkebaad = document.querySelector("span");
const city = document.querySelector("#city");
const searchbtn = document.querySelector("#citySearch");
const temp = document.querySelector("h3");
const icon = document.querySelector("img");
const icontext = document.querySelector("#iconText");
const form = document.querySelector("form");

//default location
let cityToSearch = "Varanasi";
// head.append(" "+cityToSearch);

form.addEventListener("submit",citySearch);


const fetchData = async (cityToSearch) =>{

    try{
        const url = `https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${cityToSearch}`;
        const response = await fetch(url);
        const data = await response.json();

        const {
            current:{
                temp_c,
                condition: {text, icon},
            },
            location: {name},
            } = data;

            //now update the fetched data in body
            updateData(temp_c,icon,text,name);
    } 
    catch(error){
        alert("Location Not Found");
    }
}; 

function updateData(degree,mausamPic,mausamText,cityName)
{
    headkebaad.innerText = cityName;
    temp.innerText = degree+"°";
    icon.src = mausamPic;
    icontext.innerText = mausamText;
}

fetchData(cityToSearch);

function citySearch(e)
{
    e.preventDefault();
    cityToSearch = city.value;
    fetchData(cityToSearch);
}


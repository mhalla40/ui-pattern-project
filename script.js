const url = "https://rickandmortyapi.com/api/character";

let img = document.querySelectorAll("img");
let form = document.querySelector("form");

let character = document.querySelectorAll(".character");
let popUp = document.querySelector(".pop-up");

fetch(url)
  .then((res) => res.json())
  .then((convertedResponse) => {
    console.log(convertedResponse);
    console.log(convertedResponse.results[0].image);

    for (i = 0; i < img.length; i++) {
      img[i].src = convertedResponse.results[i].image;
      console.log(img);
      let name = convertedResponse.results[i].name;

      let status = convertedResponse.results[i].status;

      let species = convertedResponse.results[i].species;

      let type = convertedResponse.results[i].type;

      let gender = convertedResponse.results[i].gender;

      let location = convertedResponse.results[i].location;

      popUp.innerText = `Name : ${name} | Status : ${status} | Species : ${species} | Type : ${type} | Gender : ${gender} | Location : ${location}`;

      img[i].addEventListener("click", openPopUp);

      function openPopUp(e) {
        e.preventDefault();
        console.log(e);
        popUp.style.opacity = 1;
      }
    }
  });

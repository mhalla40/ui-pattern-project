const url = "https://rickandmortyapi.com/api/character";

let img = document.querySelectorAll("img");
let form = document.querySelector("form");

let character = document.querySelectorAll(".character");
let popUp = document.querySelector(".pop-up");

let closeButton = document.querySelector(".close");

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

      img[i].addEventListener("click", openPopUp);
      closeButton.addEventListener("click", closePopUp);

      function openPopUp(e) {
        e.preventDefault();
        popUp.innerText = `Name : ${name} | Status : ${status} | Species : ${species} | Type : ${type} | Gender : ${gender} | Location : ${location} | Image :
        ${img[i]}`;

        popUp.style.opacity = 0.75;
        closeButton.style.opacity = 1;
      }

      function closePopUp() {
        popUp.style.opacity = 0;
        closeButton.style.opacity = 0;
      }
    }
  });

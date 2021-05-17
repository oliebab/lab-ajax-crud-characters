const charactersAPI = new APIHandler("http://localhost:8000");
const targetCharacters = document.querySelector(".characters-container");

function displayCharacters(characters) {
  targetCharacters.innerHTML = "";
  characters.forEach((character) => {
    targetCharacters.innerHTML += `<div class="character-info">
    <div class="name">Name : ${character.name}</div>
    <div class="occupation">Occupation : ${character.occupation}</div>
    <div class="cartoon">Cartoon : ${character.cartoon}</div>
    <div class="weapon">Weapon : ${character.weapon}</div>
  </div>`;
  });
  console.log("suuuuuupeeeer", characters);
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      const buttonFetchAll = document.getElementById("fetch-all");
      buttonFetchAll.addEventListener("click", (event) => {
        charactersAPI
          .getFullList()
          .then((res) => displayCharacters(res.data))
          .catch((err) => console.log(err));
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const input = document.querySelector('[name="character-id"]');
      const foo = charactersAPI
        .getOneRegister(input.value)
        .then((characterResult) => displayCharacters([characterResult.data]))
        .catch((err) => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const input = document.querySelector('[name="character-id-delete"]');
      const foo = charactersAPI
        .deleteOneRegister(input.value)
        .then((characterResult) => console.log(characterResult.data))
        .catch((err) => console.warn(err));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.querySelector('#new-character-form [name="name"]');
      const occupation = document.querySelector(
        '#new-character-form [name="occupation"]'
      );
      const weapon = document.querySelector(
        '#new-character-form [name="weapon"]'
      );
      const cartoon = document.querySelector(
        '#new-character-form [name="cartoon"]'
      );
      const newCharacter = {
        name: name.value,
        occupation: occupation.value,
        weapon: weapon.value,
        cartoon: cartoon.checked,
      };
      charactersAPI
        .createOneRegister(newCharacter)
        .then((characterResult) => {
          name.value = "";
          occupation.value = "";
          weapon.value = "";
          cartoon.checked = false;
        })
        .catch((err) => console.warn(err));
      console.log(newCharacter);
    });
});

const API_URL = "https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");

const ul = document.createElement("ul");

fetch(API_URL + "/comments")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      let elem = document.createElement("h3");
      let elem2 = document.createElement("li");
      let elem3 = document.createElement("li");
      let elem4 = document.createElement("li");

      elem.appendChild(document.createTextNode(`Usuario: ${user.name}`));

      elem2.appendChild(document.createTextNode(`Correo: ${user.email}`));

      elem3.appendChild(document.createTextNode(`Comentario: ${user.body}`));

      elem4.appendChild(document.createTextNode("- - - - -"));

      ul.appendChild(elem);
      ul.appendChild(elem2);
      ul.appendChild(elem3);
      ul.appendChild(elem4);
    });

    HTMLResponse.appendChild(ul);
  });

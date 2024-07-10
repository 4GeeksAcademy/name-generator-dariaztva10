/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["el", "nuestro"];
  let adj = ["grandioso", "gran"];
  let noun = ["informatico", "creador"];

  function generateEmail() {
    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let adjIndex = Math.floor(Math.random() * adj.length);
    let nounIndex = Math.floor(Math.random() * noun.length);

    return (
      pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + "@gmail.com"
    );
  }

  let email = generateEmail();
  console.log(email);

  document.getElementById("emailContainer").innerText = email;
};

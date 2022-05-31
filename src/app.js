/* eslint-disable */

window.onload = () => {
  document.querySelector("#excuse").innerHTML = concat();

  function concat() {
    let who = ["El gato", "Mi sobrino", "El chocoyo", "La vecina"];
    let what = ["destruyo", "rompio", "perdio", "robo"];
    let when = [
      "cuando estaba comiendo",
      "durante la noche",
      "cuando dormía",
      "mientras me estaba bañando",
      "cuando fui a comprar pan"
    ];
    let excuse1 = who[Math.floor(Math.random() * who.length)];
    let excuse2 = what[Math.floor(Math.random() * what.length)];
    let excuse3 = when[Math.floor(Math.random() * when.length)];
    return excuse1 + " " + excuse2 + " mi tarea " + excuse3;
  }
};

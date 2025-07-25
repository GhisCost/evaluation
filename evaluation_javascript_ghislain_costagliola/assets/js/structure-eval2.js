// Tableau qui va stocker les taches de la todolist

let listDeTaches = [];

// On recupère les différents éléments du HTML que l'on va utiliser et/ou modifier

let liste = document.querySelector("#tasklist");
let nouvelleTache = document.querySelector("#taskinput");
let btnAjout = document.querySelector("#addtaskbutton");

// Fonction qui ajoute une chaine de caractère à la fin du tableau.

function ajouterTache(str) {
  if (nouvelleTache.value == "") {
    return; // Empeche d'ajouter une tache vide si rien n'est écrit.
  }
  listDeTaches.push(str);
}

// Fonction qui affiche la liste de tache dans le ul.

function afficherTaches() {
  listDeTaches.forEach((taches) => {
    li = taches;
  });
}

// Fonction qui supprime une tache du tableau.

function supprimerTache(index) {
  listDeTaches.splice(index, 1);
}

// Ecouteurs d'événements

btnAjout.addEventListener("click", function () {
  if (nouvelleTache.value == "") {
    return; // Empeche d'ajouter une tache vide si rien n'est écrit.
  }
  ajouterTache(nouvelleTache.value);

  let li = document.createElement("li");
  li.textContent = nouvelleTache.value;
  li.classList.add("tache");

  let btnSupp = document.createElement("button");
  btnSupp.classList.add("btnsupp");
  btnSupp.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  afficherTaches();

  li.appendChild(btnSupp);
  liste.appendChild(li);

  btnSupp.addEventListener("click", function () {
    let i = listDeTaches.indexOf(this.parentElement.textContent);
    supprimerTache(i);
    this.parentElement.remove();
  });
  nouvelleTache.value = ""; // Vide l'input une fois l'ajout effectuer.
});

// Faire la même chose mais avec la touche "Entrée" au lieu du bouton "ajouter".

nouvelleTache.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (nouvelleTache.value == "") {
      return;
    }
    ajouterTache(nouvelleTache.value);

    let li = document.createElement("li");
    li.textContent = nouvelleTache.value;
    li.classList.add("tache");

    let btnSupp = document.createElement("button");
    btnSupp.classList.add("btnsupp");
    btnSupp.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    afficherTaches();

    li.appendChild(btnSupp);
    liste.appendChild(li);

    btnSupp.addEventListener("click", function () {
      let i = listDeTaches.indexOf(this.parentElement.textContent);
      supprimerTache(i);
      this.parentElement.remove();
    });
    nouvelleTache.value = "";
  }
});

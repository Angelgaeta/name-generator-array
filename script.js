/*
1. On reporte toutes les constantes en lien avec les Id du Html
2. On créé une constante users pour le tableau avec ses éléments dedans
3. On créé une fonction displayUser pour factoriser toute les fonctions et 
    rendre le code plus lisible car deux fonctions sur 3 font afficher
    quelque chose
4. On créé les 3 fonctions pour les 3 boutons: chercher, aléatoire et effacer
*/

const nom = document.getElementById("nom");
const chercher = document.getElementById("chercher");
const aleatoire = document.getElementById("aleatoire");
const effacer = document.getElementById("effacer");
const people = document.getElementById("people");


const users = [
  ["Raphael"," 💸", "Né le 26/02/1990", "Etre en 100% télétravail", "1 Milliard €"],
  [
    "Lésa", " 🐈",
    "Née le 02/03/1993",
    "Ouvrir un hotel pour chat",
    "Avoir la voix de Beyonce",
  ],
  ["Julien F", " 🇯🇵", "Né le 06/01/1981", "Etre rentier", "Un voyage au japon"],
  ["Marilyn", " 🐉", "Née le 14/12/1991", "Voler sur un dragon", "Du chocolat"],
  ["Enzo",  " 🍔", "Né le 26/08/2003", "Aller au japon", "Un Burger King"],
  [
    "Sofian lunette", " 🐻",
    "Né le 07/08/1984",
    "Vivre dans le monde des bisounours",
    "Une sortie avec le groupe DWWM pour fêter la certification ",
  ],
  ["Sofian", " 🏎","Né le 19/02/1988", "Devenir le prochain elon Musk", "La BMW de Murphy"],
  ["Hedy", " 🌱", "Né le 20/11/1983", "Avoir une ferme au pays", "La moto de Murphy"],
  ["Perrine", " 🇳🇿", "Née le 02/06/1988", "Visiter la nouvelle-Zelande", "Une Aston Martin"],
  ["Mathieu", " 🚀", "Né le 15/11/1990", "Aller sur Mars", "Une Fusée"],
  [
    "Samuel", " 🏡",
    "Né le 10/01/1997",
    "Parler toutes les langues de l'Univers",
    "Avoir une maison dans la prairie",
  ],
  ["Esteban", " 🐪​", "Né le 21/04/2000", "Vivre au sahara", "Un setup"],
  ["Angélique", " 🪐​​", "Née le 14/03/1988", "Ascension du Mont blanc", "Un voyage dans l'espace"],
  [
    "Julien D.", " 🏇​​",
    "Né le 06/09/1980",
    "Traverser la route de Sete sans mourir",
    "Un petit Canidé",
  ],
  ["Stephane", " 🧘🏻‍♂️​​", "Né le 13/12/1966", "Devenir Sage", "Une Ford Mustang Mach One 1970"],
  [
    "Steven", " 🗺️",
    "Né le 27/07/1989",
    "Faire la demi-année à Porto-Rico et l'autre en France",
    "Un voyage en Grèce",
  ],
  [
    "Murphy", " 🏍",
    "Né le 14/06/1994",
    "Pouvoir de persuasion absolue",
    "Une nouvelle moto",
  ],
  [
    "Roxane", " 🌍",
    "Née le 20/02/1991",
    "Tous comprendre facilement et rapidement dans tous les languages de programmation",
    "Un voyage autour du monde avec toute ma famille",
  ],
  [
    "Michael", " 🎼",
    "Né le 02/01/1998",
    "Vivre de sa passion( composer des musiques pour jeux, films,faire des évènements avec des psittacidés ou d'autres petits oiseaux pour éveiller la curiosité et partager mes connaissances)",
    "Quetchi",
  ],
];

// Fonction pour factoriser le code et le rendre plus lisible
function displayUser(person) { // person est représenter par guillemets obliques pour
  // transformer en "template" tout ce qui se trouve dans ${} dedans remplacé par sa valeur
  // position est égal à ${person[0]} 
  let html = `<h2>${person[1]}</h2>`; // affiche sa date de naissance
  html +=`<h2 style="color:white">${person[0].toUpperCase()} </h2>`
  html += `${person[2]}`; // affiche sa date de naissance
  html += `<p><br></p>`; 
  html += "<h3>Son rêve:</h3>"; // titre
  html += `<p>${person[3]}</p>`; // affiche son rêve
  html += `<p><br></p>`; 
  html += "<h3>Cadeau d'anniversaire:</h3>"; // titre
  html += `<p>${person[4]}</p>`; // affiche son cadeau d'anniversaire
  html += `<p><br></p>`; 
  people.innerHTML = html; // on affiche le tout dans la div people

}

// Fonction du bouton "Chercher"
chercher.addEventListener("click", function () { //attache une fonction à appeler chq fois que l'événement est envoyé à la cible
  let trouve = false; // est-ce qu'on a trouvé la personne ?

  for (let i = 0; i < users.length; i++) {
    // pour chaque personne
    if (users[i][0].toLowerCase() === nom.value.toLowerCase()) { // si l'élément du nom entrer dans chercher est
      // sitrictement égal à l'élément de l'élément d'un tableau en première position alors c'est celui-ci
      trouve = true; // si ok alors
      displayUser(users[i], i + 1);
       // on affiche la personne (un élément du tableau users -> avec ses éléments dedans)
      break; // on sort de la boucle
    }
  }
  if (!trouve) { // 
    people.innerHTML =
      "<p>Désolé! Ce nom n'est pas encore connu par notre base de données.</p>";
  }
});

// Fonction du bouton "Aléatoire"
aleatoire.addEventListener("click", function () { 
  const i = Math.floor(Math.random() * users.length); //floor arrondir au numéro le plus bas * la longueur du tab users
  displayUser(users[i], i + 1); // on affiche la personne par rapport à sa position
});

// Fonction du bouton "Effacer"
effacer.addEventListener("click", function () { 
  nom.values = "";
  people.innerHTML = "Les infos...";
});


const nom = document.getElementById("nom");
const chercher = document.getElementById("chercher");
const aleatoire = document.getElementById("aleatoire");
const effacer = document.getElementById("effacer");
const people = document.getElementById("people");
const title = document.getElementById("title");

const users = [
  ["Raphael", "26/02/1990", "Etre en 100% télétravail", "1 Milliard €"],
  [
    "Lésa",
    "02/03/1993",
    "Ouvrir un hotel pour chat",
    "Avoir la voix de Beyonce",
  ],
  ["Julien F", "06/01/1981", "Etre rentier", "Un voyage au japon"],
  ["Marilyn", "14/12/1991", "Voler sur un dragon", "Du chocolat"],
  ["Enzo", "26/08/2003", "Aller au japon", "Un Burger King"],
  [
    "Sofian lunette",
    "07/08/1984",
    "Vivre dans le monde des bisounours",
    "Une sortie avec le groupe DWWM pour fêter la certification ",
  ],
  ["Sofian", "19/02/1988", "Devenir le prochain elon Musk", "La BMW de Murphy"],
  ["Hedy", "20/11/1983", "Avoir une ferme au pays", "La moto de Murphy"],
  ["Perrine", "02/06/1988", "Visiter la nouvelle-Zelande", "Nada"],
  ["Mathieu", "15/11/1990", "Aller sur Mars", "Une Fusée"],
  [
    "Samuel",
    "10/01/1997",
    "Parler toutes les langues de l'Univers",
    "Avoir une maison dans la prairie",
  ],
  ["Esteban", "21/04/2000", "Vivre au sahara", "Un setup"],
  ["Angelique", "14/03/1988", "Ascension du Mont blanc", "Le permis moto"],
  [
    "Julien D.",
    "06/09/1980",
    "Traverser la route de Sete sans mourir",
    "Un petit Canidé",
  ],
  ["Stephane", "13/12/1966", "Devenir Sage", "Une Ford Mustang Mach One 1970"],
  [
    "Steven",
    "27/07/1989",
    "Faire la demi-année à Porto-Rico et l'autre en France",
    "Un voyage en Grèce",
  ],
  [
    "Murphy",
    "14/06/1994",
    "Pouvoir de persuasion absolue",
    "Une nouvelle moto",
  ],
  [
    "Roxane",
    "20/02/1991",
    "Tous comprendre facilement et rapidement dans tous les languages de programmation",
    "Un voyage autour du monde avec toute ma famille",
  ],
  [
    "Michael",
    "02/01/1998",
    "Vivre de sa passion( composer des musiques pour jeux, films,faire des évènements avec des psittacidés ou d'autres petits oiseaux pour éveiller la curiosité et partager mes connaissances)",
    "Quetchi",
  ],
];

function displayUser(person, position) {
  let html = "<h1>Personne n°" + position + "</h1>"; // on écrit "person {numéro de la personne}"
  html += `<h2>${person[0]}</h2>`;
  html += `<p>Né•e le ${person[1]}</p>`; // affiche sa date de naissance
  html += "<h3>Son rêve</h3>"; // titre pour les couleurs
  html += `<p>${person[2]}</p>`; // affiche son objectif de vie
  html += "<h3>Cadeau d'anniversaire</h3>"; // titre pour les couleurs
  html += `<p>${person[3]}</p>`; // affiche son rêve
  people.innerHTML = html; // on affiche le tout dans la div people
}

chercher.addEventListener("click", function () {
  let trouve = false; // est-ce qu'on a trouvé la personne ?
  for (let i = 0; i < users.length; i++) {
    // pour chaque personne
    if (users[i][0].toLowerCase() === nom.value.toLowerCase()) {
      trouve = true;
      displayUser(users[i], i + 1); // on affiche la personne
      break; // on sort de la boucle
    }
  }
  if (!trouve) {
    people.innerHTML =
      "<p>Désolé! Ce nom n'est pas encore connu par notre base de données.</p>";
  }
});

aleatoire.addEventListener("click", function () {
  const i = Math.floor(Math.random() * users.length);
  displayUser(users[i], i + 1); // on affiche la personne
});

effacer.addEventListener("click", function () {
  nom.value = "";
  people.innerHTML = "Les infos...";
});

// ajouter des commentaires

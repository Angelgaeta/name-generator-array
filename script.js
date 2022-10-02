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

// Fonction pour factoriser le code et le rendre plus lisible
function displayUser(person) { // person est représenter par guillemets obliques pour
  // transformer en "template" tout ce qui se trouve dans ${} dedans remplacé par sa valeur
  // position est égal à ${person[0]} 
  let html = "<strong>Résultats:</strong>"; // on écrit "person {numéro de la personne}"
  html += `<td><h2 style="color:blue">${person[0]}</h2></td>`;
  html += `<p>Né•e le ${person[1]}</p>`; // affiche sa date de naissance
  html += "<h3>Son rêve</h3>"; // titre
  html += `<p>${person[2]}</p>`; // affiche son rêve
  html += "<h3>Cadeau d'anniversaire</h3>"; // titre
  html += `<p>${person[3]}</p>`; // affiche son cadeau d'anniversaire
  people.innerHTML = html; // on affiche le tout dans la div people

}

// Fonction du bouton "Chercher"
chercher.addEventListener("click", function () { 
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


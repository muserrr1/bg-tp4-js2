"use strict";
// mode strict, obligatoire au tout debut de chaque script (slide 51)
 
// Au début de script.js : déclarer une variable "lignes", et l'initialiser à 0
// let car sa valeur va changer a chaque insertion (slide 51)
// elle est declaree en dehors des fonctions donc globale : toutes les fonctions peuvent l'utiliser (slide 50)
let lignes = 0;
 
// Au début, JavaScript va créer le tableau "persons"
// c'est un tableau d'objets (slide 40), chaque objet person a un nom, un prenom et des points (slide 39)
// const car on ne change pas la variable elle-meme (slide 51)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
 
// Appel de init()
// on peut l'appeler avant sa declaration car une fonction declaree avec function est hoistee (slide 46)
// persons et lignes doivent quand meme etre declares avant cet appel, sinon erreur
init();
 
// init parcourt le tableau persons et appelle doInsert pour chaque objet
function init() {
    // boucle for..of pour parcourir les objets du tableau persons (slide 44)
    for (const person of persons) {
        // on appelle doInsert avec les donnees de l'objet courant, on accede aux proprietes avec le point (slide 39)
        doInsert(person.nom, person.prenom, person.points);
    }
}
 
// doInsert calcule le numero de la ligne puis appelle doInsertRowTable
function doInsert(nom, prenom, points) {
    // Incrémenter la variable lignes de 1 avec ++ (slide 41),
    // puis l'affecter à num, au lieu de 99
    lignes++;
    const num = lignes;
 
    // Appeler doInsertRowTable avec les paramètres appropriés (appel de fonction, slide 45)
    doInsertRowTable(num, nom, prenom, points);
}
 
// Fonction de l'etape 2 : elle insere une ligne dans le tableau
// Une fonction se declare avec le mot cle function et des parametres (slide 45)
function doInsertRowTable(num, nom, prenom, points) {
 
    // Récupérer l'élément tableau
    // getElementsByTagName retourne une collection, donc on prend le premier element avec [0] (slides 66 a 69)
    const table = document.getElementsByTagName("table")[0];
 
    // Créer un élément de type tr (ligne de tableau)
    // createElement cree un element HTML a partir de zero (slide 104)
    const row = document.createElement("tr");
 
    // Affecter à l'élément row, la valeur "row" à son attribut "class",
    // en utilisant la méthode setAttribute (slide 107)
    row.setAttribute("class", "row");
 
    // Créer 5 éléments de type td (colonne de tableau) avec createElement (slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
 
    // Remplir le contenu de chaque colonne avec les paramètres de la fonction,
    // en utilisant innerText, qui est reconnu comme du texte simple (slides 90 et 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
 
    // La dernière colonne doit contenir un élément input dont l'attribut type vaut checkbox
    // on cree l'input (slide 104), on met son attribut type (slide 107),
    // puis on le rajoute dans col5 avec append (slide 98)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);
 
    // Affectation des classes avec setAttribute (slide 107), pour que le CSS de style.css s'applique
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");
 
    // Rajouter les colonnes à la ligne row avec la méthode append() (slide 98)
    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);
 
    // Rajouter la ligne row au tableau table, a la fin (slide 98)
    table.append(row);
}
 
// Fonction appelee par le bouton Console Tableau (onclick, slides 15 et 17)
// elle affiche le contenu du tableau persons dans la console avec console.log (slide 33)
function consoleTableau() {
    console.log(persons);
}
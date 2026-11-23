"use strict";
// Mode strict obligatoire (slide 51)

// Variable globale pour compter les lignes (slide 50, 51)
let lignes = 0;

// Variable globale pour accumuler le total des points (slide 36)
let total_points = 0;

// Tableau d'objets initial (slide 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Appel de la fonction init (slide 46)
init();

function init() {
    // Boucle for..of pour parcourir le tableau persons (slide 44)
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

function doInsert(nom, prenom, points) {
    // Incrémentation du nombre de lignes (slide 41)
    lignes++;
    const num = lignes;

    // Ajouter les points au total cumulé (slide 38)
    total_points += points;

    // Insertion de la ligne dans le tableau HTML (slide 45)
    doInsertRowTable(num, nom, prenom, points);

    // Mettre à jour l'affichage du résumé (slide 40)
    update_summary();
}

// Fonction pour mettre à jour l'espace résumé (slide 42)
function update_summary() {
    const element_lignes = document.getElementById("p1"); // (slide 61)
    const element_points = document.getElementById("p3"); // (slide 61)

    element_lignes.innerText = lignes + " ligne(s)";      // (slide 91)
    element_points.innerText = "Total point(s)= " + total_points; // (slide 91)
}

function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementsByTagName("table")[0]; // (slide 66-69)
    const row = document.createElement("tr"); // (slide 104)
    row.setAttribute("class", "row"); // (slide 107)

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num; // (slide 91)
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input"); // (slide 104)
    checkbox.setAttribute("type", "checkbox"); // (slide 107)
    col5.append(checkbox); // (slide 98)

    col1.setAttribute("class", "col_number"); // (slide 107)
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1); // (slide 98)
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    table.append(row); // (slide 98)
}

function consoleTableau() {
    console.log(persons); // (slide 33)
}
"use strict"; // (slide 51)

let lignes = 0;
let total_points = 0;

const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

init();

function init() {
    for (const person of persons) { // (slide 44)
        doInsert(person.nom, person.prenom, person.points);
    }
}

// Fonction doNewData gérant la lecture du formulaire et le contrôle de saisie (slide 50, 55)
function doNewData() {
    // Récupérer les éléments du DOM (slide 61)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Accéder aux valeurs saisies (slide 53)
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value); // Conversion texte en entier (slide 53)

    // Saisie contrôlée : vérifier si les champs sont vides ou si points est NaN (slide 55)
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        alert("Formulaire incomplet !"); // (slide 55, 116)
    } else {
        // Insérer les données dans le tableau et l'interface (slide 53)
        doInsert(nom, prenom, points);

        // Rajouter le nouvel objet dans le tableau persons avec push (slide 53, 106)
        persons.push({ nom: nom, prenom: prenom, points: points });

        // Vider les champs du formulaire (slide 53)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function doInsert(nom, prenom, points) {
    lignes++;
    const num = lignes;
    total_points += points;
    doInsertRowTable(num, nom, prenom, points);
    update_summary();
}

function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementsByTagName("table")[0];
    const row = document.createElement("tr"); // (slide 104)
    row.setAttribute("class", "row"); // (slide 107)

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox"); // (slide 107)
    col5.append(checkbox); // (slide 98)

    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    table.append(row); // (slide 98)
}

function consoleTableau() {
    console.log(persons); // (slide 33)
}
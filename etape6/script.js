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

function doNewData() {
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        alert("Formulaire incomplet !"); // (slide 55)
    } else {
        doInsert(nom, prenom, points);
        persons.push({ nom: nom, prenom: prenom, points: points }); // (slide 53, 106)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

// Fonction de suppression des lignes sélectionnées (Étape 6, slide 61-62)
function deleteRow() {
    // Étape 1 : Vérifier si le tableau est vide (slide 61)
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }

    // Étape 2 : Récupérer toutes les lignes et les checkboxes avec querySelectorAll (slide 61, 143)
    const rows = document.querySelectorAll("table tr.row");
    const checkboxes = document.querySelectorAll(".col_chkbox input[type='checkbox']");

    // Étape 3 : Vérifier si aucune checkbox n'est cochée (slide 62)
    let checkedCount = 0;
    for (const cb of checkboxes) {
        if (cb.checked) {
            checkedCount++;
        }
    }

    if (checkedCount === 0) {
        alert("Sélectionnez au moins une ligne !"); // (slide 62)
        return;
    }

    // Étape 4 : Demander une confirmation à l'utilisateur avant suppression (slide 62, 116)
    const confirmation = confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?");
    if (!confirmation) {
        return; // Quitter la fonction si l'utilisateur clique sur "Annuler"
    }

    // Étape 5 & 6 : Parcourir les lignes en sens inverse pour éviter les décalages d'index
    for (let i = rows.length - 1; i >= 0; i--) {
        const checkbox = checkboxes[i];
        if (checkbox.checked) {
            const row = rows[i];

            // Récupérer la valeur des points dans la 4e cellule (index 3)
            const points = parseInt(row.children[3].innerText);

            // Mettre à jour les variables globales
            total_points -= points;
            lignes--;

            // Supprimer la ligne du DOM (slide 168)
            row.remove();

            // Supprimer l'entrée correspondante du tableau persons avec splice (slide 106)
            persons.splice(i, 1);
        }
    }

    // Réindexer correctement la colonne N° des lignes restantes
    const remainingRows = document.querySelectorAll("table tr.row");
    for (let i = 0; i < remainingRows.length; i++) {
        remainingRows[i].children[0].innerText = i + 1;
    }
    lignes = remainingRows.length;

    // Étape 7 : Appeler update_summary() pour actualiser l'affichage (slide 42, 62)
    update_summary();
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
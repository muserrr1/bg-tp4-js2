"use strict";
// mode strict, obligatoire au tout debut de chaque script (slide 51)

// Au début de script.js : déclarer une variable "lignes", et l'initialiser à 0
// elle est declaree en dehors des fonctions donc globale : toutes les fonctions peuvent l'utiliser (slide 50)
let lignes = 0;

// Pour le total de points, on utilise une nouvelle variable "total_points" qu'on declare et initialise a 0
// let car sa valeur va changer (slide 51), globale comme lignes (slide 50)
let total_points = 0;

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

// doInsert numerote la ligne, met a jour les 2 variables, insere la ligne puis met a jour le resume
function doInsert(nom, prenom, points) {
    // Rajouter points (passé en paramètre) à la variable total_points
    // += est un operateur combine : total_points = total_points + points (slide 41)
    total_points += points;

    // Incrémenter la variable lignes de 1 avec ++ (slide 41),
    // puis l'affecter à num, au lieu de 99
    lignes++;
    const num = lignes;

    // code précédent : appeler doInsertRowTable avec les paramètres appropriés (appel de fonction, slide 45)
    doInsertRowTable(num, nom, prenom, points);

    // Appelez la fonction update_summary() qu'on définira après
    update_summary();
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

// update_summary met a jour l'espace du resume (les 2 paragraphes p1 et p3)
function update_summary() {
    // Récupérer l'élément id = p1, avec getElementById (slides 61 a 64)
    const element_lignes = document.getElementById("p1");

    // Récupérer l'élément id = p3
    const element_points = document.getElementById("p3");

    // Avec innerText, modifier le contenu de element_lignes pour afficher le nombre de lignes (slides 90 et 91)
    // le + colle un nombre et du texte, JS convertit le nombre en texte tout seul (slides 31 et 37)
    element_lignes.innerText = lignes + " ligne(s)";

    // Avec innerText, modifier le contenu de element_points pour afficher le total des points
    element_points.innerText = "Total point(s)= " + total_points;
}

// doNewData est appelee par le bouton Ajouter du formulaire (onclick, slides 15 et 17)
function doNewData() {
    // Récupérer l'élément id = form_nom, form_prenom et form_points avec getElementById (slides 61 a 64)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Accéder à l'attribut value de chaque champ et le stocker (value est donne dans l'enonce du TP)
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    // parseInt convertit un texte en entier (donne dans l'enonce du TP), si le champ est vide ca donne NaN
    const points = parseInt(elt_points.value);

    // Saisie controlee : if...else (slide 42)
    // === compare (slide 41) et || veut dire OU (slide 41)
    // Number.isNaN(points) retourne true si points n'est pas un nombre (aide donnee dans l'enonce)
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // alert est une methode de window qui affiche une boite de dialogue (slides 34 et 116)
        alert("Formulaire incomplet !");
    } else {
        // Appelez doInsert avec les nouvelles données récupérées (appel de fonction, slide 45)
        doInsert(nom, prenom, points);

        // Insérer également les nouvelles données dans le tableau "persons"
        // push ajoute un element a la fin du tableau (slide 38), on lui donne un objet (slide 39)
        persons.push({ nom: nom, prenom: prenom, points: points });

        // En manipulant elt_nom, elt_prenom, elt_points, remettre leur contenu à vide (attribut value)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

// deleteRow est appelee par le bouton Supprimer (onclick, slides 15 et 17)
function deleteRow() {

    // Étape 1 : vérifier si le tableau est vide
    // si le nombre de lignes (variable lignes) est égal à 0, afficher un message d'alerte et sortir de la fonction
    // === est un operateur de comparaison (slide 41), return sort de la fonction (slide 45)
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }

    // Étape 2 : récupérer le tableau et la liste des checkbox cochées
    // querySelector et querySelectorAll prennent un selecteur CSS (slides 76 a 78)
    // ".col_chkbox input:checked" = les input a l'interieur de .col_chkbox qui sont cochees
    const table = document.querySelector("table");
    const cochees = table.querySelectorAll(".col_chkbox input:checked");

    // Étape 3 : vérifier si aucune checkbox n'est cochée (length = nombre d'elements, slide 44)
    if (cochees.length === 0) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Étape 4 : demander une confirmation à l'utilisateur avant suppression
    // confirm est une boite de dialogue de window comme alert, elle retourne false si on clique sur Annuler
    // (confirm n'est pas dans le cours, c'est de la meme famille que alert et prompt du slide 116)
    // ! veut dire NON (slide 41)
    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
        return;
    }

    // Étape 5 : récupérer toutes les lignes du tableau (entete comprise)
    const rows = table.querySelectorAll("tr");

    // Étape 6 : parcourir les lignes, de la derniere a la premiere (la ligne 0 est l'entete)
    // on commence par la fin pour que la suppression d'une ligne ne decale pas les indices des lignes suivantes
    // boucle for (slide 44)
    for (let i = rows.length - 1; i >= 1; i--) {
        const row = rows[i];

        // pour chaque ligne, vérifier si la checkbox est cochée (propriete checked)
        const checkbox = row.querySelector(".col_chkbox input");
        if (checkbox.checked) {
            // récupérer la valeur des points dans la 4e cellule : children[3] (slides 86 a 90)
            // innerText donne le texte (slides 90 et 91), parseInt le convertit en entier
            const points = parseInt(row.children[3].innerText);

            // la soustraire de total_points avec l'operateur combine -= (slide 41)
            total_points -= points;

            // décrémenter la variable lignes avec -- (slide 41)
            lignes--;

            // supprimer la ligne du DOM avec remove() (slide 100)
            row.remove();

            // supprimer aussi la même entrée dans le tableau persons
            // la ligne i du tableau correspond a persons[i - 1] (a cause de l'entete)
            // splice(position, 1) supprime 1 element a cette position (splice n'est pas dans le cours)
            persons.splice(i - 1, 1);
        }
    }

    // Étape 7 : afficher un message de succès et mettre à jour le résumé
    alert("Suppression réussie !");
    update_summary();
}


// ETAPE 7 : 3 fonctionnalites en plus


// Fonctionnalite 1 : exporter les personnes dans un fichier CSV
// appelee par le bouton Exporter (onclick, slides 15 et 17)
function exportPersons() {
    // s'il n'y a aucune personne, alert (slide 116) puis return pour sortir (slide 45)
    if (persons.length === 0) {
        alert("Aucune personne à exporter !");
        return;
    }

    // contenu du fichier : une ligne d'entete puis une ligne par personne, separees par ;
    // \uFEFF au debut pour qu'Excel affiche bien les accents
    let contenu = "\uFEFFNom;Prénom;Points\n";

    // boucle for..of pour parcourir persons (slide 44)
    for (const person of persons) {
        // += ajoute du texte a la fin (slide 41), les proprietes se lisent avec le point (slide 39)
        contenu += person.nom + ";" + person.prenom + ";" + person.points + "\n";
    }

    // Blob = un fichier cree en memoire, URL.createObjectURL lui donne une adresse temporaire 
    const fichier = new Blob([contenu], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(fichier);

    // on cree un lien <a> (createElement, slide 104) avec setAttribute (slide 107)
    // l'attribut download dit au navigateur de telecharger le fichier au lieu de l'ouvrir
    const lien = document.createElement("a");
    lien.setAttribute("href", url);
    lien.setAttribute("download", "persons.csv");

    // on ajoute le lien a la page (append, slide 98), on simule un clic, puis on le supprime (remove, slide 100)
    document.body.append(lien);
    lien.click();
    lien.remove();

    // on libere l'adresse temporaire
    URL.revokeObjectURL(url);
}

// Fonctionnalite 2 : importer des personnes depuis un fichier CSV 
// appelee par le bouton Importer (onclick, slides 15 et 17) : elle ouvre la fenetre de choix de fichier
// en cliquant sur l'input de type file, qui est cache dans le HTML (getElementById, slides 61 a 64)
function chooseFile() {
    document.getElementById("import_file").click();
}

// appelee quand l'utilisateur a choisi un fichier evenement onchange
function importPersons() {
    const input = document.getElementById("import_file");

    // files[0] = le premier fichier choisi (propriete files)
    const fichier = input.files[0];

    // si aucun fichier n'est choisi on sort (return, slide 45)
    if (!fichier) {
        return;
    }

    // on vide l'input pour pouvoir re-choisir le meme fichier plus tard
    input.value = "";

    // FileReader lit le contenu d'un fichier 
    const lecteur = new FileReader();

    // onload recoit une fonction (callback, slide 47) executee quand la lecture est terminee
    lecteur.onload = function () {
        // on enleve le BOM du debut (ajoute par l'export) et on coupe le texte en lignes avec split 
        const lignesTexte = lecteur.result.replace("\uFEFF", "").split(/\r?\n/);

        // compteurs de lignes importees et ignorees (let car elles changent, slide 51)
        let importes = 0;
        let ignores = 0;

        // boucle for..of pour parcourir les lignes du fichier (slide 44)
        for (const ligne of lignesTexte) {
            // on ignore les lignes vides
            if (ligne.trim() === "") {
                continue;
            }

            // chaque ligne est de la forme nom;prenom;points, on la coupe avec split
            const champs = ligne.split(";");

            // on ignore la ligne d'entete (Nom;Prénom;Points)
            if (champs[0].trim().toLowerCase() === "nom") {
                continue;
            }

            // une ligne avec moins de 3 champs est invalide
            if (champs.length < 3) {
                ignores++;
                continue;
            }

            // meme controle que doNewData : parseInt (donne dans l'enonce), === et || (slide 41), Number.isNaN
            const nom = champs[0].trim();
            const prenom = champs[1].trim();
            const points = parseInt(champs[2]);

            if (nom === "" || prenom === "" || Number.isNaN(points)) {
                ignores++;
            } else {
                // on reutilise doInsert (ligne + compteurs + resume) et push (slide 38) comme pour le formulaire
                doInsert(nom, prenom, points);
                persons.push({ nom: nom, prenom: prenom, points: points });
                importes++;
            }
        }

        // on reapplique le filtre de recherche aux nouvelles lignes, puis on affiche le bilan avec alert (slide 116)
        searchPersons();
        alert(importes + " personne(s) importée(s), " + ignores + " ligne(s) ignorée(s).");
    };

    // on lance la lecture du fichier en texte UTF-8
    lecteur.readAsText(fichier, "UTF-8");
}

//  Fonctionnalite 3 : rechercher une personne par nom 
// appelee a chaque touche tapee dans le champ de recherche (onkeyup, evenement pas vu dans le cours)
function searchPersons() {
    // texte tape (propriete value) mis en minuscules pour ignorer majuscules/minuscules (toLowerCase)
    const texte = document.getElementById("search_field").value.toLowerCase();

    // toutes les lignes (slides 76 a 78)
    const rows = document.querySelectorAll("tr");

    // on saute l'entete (indice 0)
    for (let i = 1; i < rows.length; i++) {
        // le nom est dans la 2e cellule : children[1] (slides 86 a 90), innerText (slides 90 et 91)
        const nom = rows[i].children[1].innerText.toLowerCase();

        // includes dit si le nom contient le texte tape (le meme nom que la methode des tableaux du slide 38, ici sur du texte)
        // notation ternaire condition ? a : b (slide 42)
        // style.display = "none" cache la ligne, "" la remet (propriete style, slides 15 et 109)
        rows[i].style.display = nom.includes(texte) ? "" : "none";
    }
}
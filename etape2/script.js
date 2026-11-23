"use strict";





// mode strict, obligatoire au tout debut de chaque script (slide 51)
 
// Fonction appelee par le bouton Ajouter (onclick dans index.html, slides 15 et 17)
// Une fonction se declare avec le mot cle function et des parametres (slide 45)
// num, nom, prenom, points sont les valeurs de la nouvelle ligne
function doInsertRowTable(num, nom, prenom, points) {
 






    // Récupérer l'élément tableau

    // getElementsByTagName retourne une collection, donc on prend le premier element avec [0] (slides 66 a 69)
    
    // const car on ne change pas la variable apres (slide 66)

    const table = document.getElementsByTagName("table")[0];
 
    // Créer un élément de type tr (ligne de tableau)

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
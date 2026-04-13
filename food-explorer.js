// fetch des donnees
const getFoods = async () => {
    try {
        const res = await
        fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        //2 . Transformation avec map()
        const foods = data.map((item, index) => {
            return {
                id: item.id,
                name: item.name,
                category: index % 2 === 0 ?
                "vegetarian" : "meat",
                price: (index + 1) * 5
            };
        });
        console.log("Tous les plats :");
        console.table(foods);

        // 3. filtrage
        const filteredFoods = filterByCategory(foods, "vegetarian");

        //4. Affichage
        displayFoods(filteredFoods);

        // 5. statistiques
        console.log("Total plats :", foods.length);
        console.log("Resultats filtees :", foods.length);
} catch (error) {
    console.log("Erreur :", error);
  }
};

// fonction de filtrage
const filterByCategory = (foods, category) => {
    return foods.filter(foods => foods.category === category);
};

//fonction d'affichage
const displayFoods = (foods) => {
    if (foods.length === 0) {
        console.log("Aucun plat trouvé !");
        return;
    }
    foods.forEach(food => {
        console.log(`Nom: ${food.name.toUpperCase()} |
        prix: ${food.price}FCFA | Categorie: ${food.category}`
    );
    });
};
getFoods();







/*
1- l'utilisation du map() avant le filter() : c'est parxce qu'on veut d'abord transformer les donnees
pour avoir une structure claire avant de les filtrer

2- la difference entre map() et filter()
le map() transforme chaque element par contre le filter() selectionne certains elements 

3- pourquoi transformer les donneess ?
on transforme les donnees parceque les données de l'API ne sont pas adaptées directement a notre application.
*/

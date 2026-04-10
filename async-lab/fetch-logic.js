// fonction async/await
const fetchUserData = async () => {
    console.log("Requete lancée...");
    try{
        //attendre la reponse du serveur avec le premier await
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error("Erreur lors de la recuperation des donnees !");
        }
        const user = await response.json();
        //affichage avec le template litterale
        console.log(`Nom : ${user.name} Entreprise : ${user.company.name} Email : ${user.email}`);
    } catch (error) {
        console.error("%C" + error.message, "color: red;");
    }
    console.log("Requete terminée.");
};
// appel de la fonction
fetchUserData();
//bonus promise.all()
const getFastData = async () => {
    try {
        const [userResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);
        if (!userResponse.ok || ! postResponse.ok) {
            throw new Error("Erreur dans les requetes !");
        }
        const user = await userResponse.json();
        const post = await postResponse.json();
        console.log("Les deux requetes sont terminées !");
        console.log("utilisateur :", user.name);
        console.log("post :", post.title);
    } catch (error) {
        console.error("%C" + error.message, "color: red; ");
    }
};
getFastData



/*
1- pourquoi le code initial ne marche pas ?
parceque fetch() est Asynchrone  le code essaie de lire directement response.json() alors que la reponse n'est pas encore arrivee 
resultat : user est underfined.

2- que fait await ?
await met la fonction en pause jusqu'a ce que la promesse soit terminee.
Importances :
-il ne bloque pas tout le navigateur
- il bloque uniquement la fonction async dans laquelle il est utilise
 par consequent le reste de programme peut continuer a fonctionner

 3- pourquoi verifier response.ok ?
 meme si fetch ne renvoie pas d'erreur reseau, le serveur peut repondre avec une erreur (404, 500...).

 fetch considere ca comme "reussi", donc:
 il faut verifier response.ok pour s'assurer que tout est vraiment ok
 pour pouvoirs eviter les bugs
*/

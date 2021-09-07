// Demonstration de la librairie fs (file system)
// - lecture d'un fichier
// - renommer un fichier
// - verification de la presence/lecture/ecriture fichier/dossier
// Auteur: Alain Pilon
// 7 septembre 2021
const fs = require('fs');
const path = require('path');
// pour lire le contenu d'un fichier
// fs.readFile(
//     path.join(__dirname, 'data', 'data.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );
// pour renommer un fichier...
// fs.rename(
//     path.join(__dirname, 'data', 'data.txt'),
//     path.join(__dirname, 'data', 'nouveauNom.txt'),
//     (err) => {
//         if (err) throw err;
//         console.log('Le fichier a ete renomme!!');
//     }
// );
let nomFichier = path.join(__dirname, 'data', 'data.txt');
let nomDossier = path.join(__dirname, 'data');
fs.access( nomDossier, fs.constants.F_OK, err => {
    if (err)
        console.log(`Le dossier "${nomDossier}" n'existe pas`);
    else
        console.log(`Le dossier "${nomDossier}" existe `);
});
fs.access( nomFichier, fs.constants.F_OK, err => {
    if (err)
        console.log(`Le dossier "${nomFichier}" n'existe pas`);
    else
        lectureFichier(nomFichier);
});
console.log('Fin du programme');

function lectureFichier(nomFichier) {
    console.log('Le fichier existe et voici son contenu:');
    // pour lire le contenu d'un fichier
    fs.readFile(
        nomFichier,
        'utf-8',
        (err, data) => {
            if (err) throw err;
            console.log(data);
        }
    );    
}

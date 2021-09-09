const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8000;
let serveur = http.createServer(
    (requete, reponse) => {
        console.log(requete.url);
        if (requete.url === '/') {
            reponse.writeHead(200, { 'Content-type': 'text/html' });
            reponse.write('<h1>Voici ma page index.html</h1>');
            reponse.end();
        } else {
            reponse.writeHead(404, { 'Content-type': 'text/html' });
            reponse.write('<h1>page introuvable</h1>');
            reponse.write(`<h2>${requete.url}</h2>`);
            reponse.end();           
        }
    }
);
serveur.listen(PORT, () => console.log(`Le serveur est demarre sur le port: ${PORT}`));
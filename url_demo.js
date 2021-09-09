const url = require('url');
const MONURL = new URL('https://www.monsiteweb.com:8080/test.html?login=alain&passwd=123');

console.log('href=', MONURL.href);
console.log('url.toString=', MONURL.toString());
console.log('host=', MONURL.host);
console.log('hostname=', MONURL.hostname);
console.log('pathname=', MONURL.pathname);
console.log('search=', MONURL.search);
console.log('searchParams=', MONURL.searchParams);
MONURL.searchParams.append('nom', 'Jo Blow');
console.log('searchParams=', MONURL.searchParams);
MONURL.searchParams.forEach((valeur, nom) => console.log(`cle:${nom}=valeur:${valeur}`));
// chiedo la mail all'utente tramite prompt
var mailutente = prompt('Inserisci la tua mail');
// creo una lista di mail con array
var listamail = ['pippo@pluto.com', 'topolino@pluto.com, paperino@pluto.com'];
// elaboro la risposta
if (mailutente == listamail) {
  document.getElementById('answer').innerHTML = 'Login effettuato con successo';

}
else {
  document.getElementById('answer').innerHTML = 'Login fallito';
}

//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// CREO UNA COSTANTE FIRSTNAME A CUI DARA' VALORE L'UTENTE

const firstName = prompt("Come ti chiami?");

console.log(firstName);

//---------------------------------//
// CREO UNA COSTANTE LASTNAME

const lasttName = prompt("Qual è il tuo cognome?");

console.log(lasttName);

//---------------------------------//
// CREO UNA COSTANTE FAVCOLOR

const favColor = prompt("Qual è il tuo colore preferito?");

console.log(favColor);

//---------------------------------//
// CREO UNA COSTANTE NUMBER PER METTERLO ALLA FINE DELLA PASSWORD SENZA L'AIUTO DELL'UTENTE

const number = 23;

console.log(number);

//---------------------------------//
// PRENDO DAL MIO FOGLIO HTML L'ELEMENTO CON L'ID PASSWORD E LO CHIAMO ELEMENT

const element = document.getElementById("password");

console.log(element);

//---------------------------------//
// CREO UIN MESSAGGIO DA FAR APPARIRE NELL'ELEMENT

const message = "La tua password è:" + " " + firstName + lasttName + favColor + number;

console.log(message);

//---------------------------------//
// STAMPO IN PAGINA L'ELEMENTO CON IL MESSAGGIO

element.innerText = message;

//---------------------------------//
// STAMPO IN CONSOLE IL RISULTATO FINALE DELLA PASSWORD

const sum = firstName + lasttName + favColor + number;

console.log(sum);

//---------------------------------//



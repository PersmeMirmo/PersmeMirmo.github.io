var myHeading = document.querySelector('h1');
myHeading.textContent = 'ARBOLES DE FLOR DE CEREZO';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Porfavor ingres tu nombre');
  localStorage.setItem('nombre', myName);
  myHeading.textContent = myName +', LEE SOBRE:  ARBOLES DE FLOR DE CEREZO' ;
}

if(!localStorage.getItem('nombre')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('nombre');
  myHeading.textContent = storedName +', LEE SOBRE:  ARBOLES DE FLOR DE CEREZO';
}
myButton.onclick = function() {
  setUserName();
}
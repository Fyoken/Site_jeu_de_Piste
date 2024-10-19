function win() {
  var mot = document.getElementById('motMyst').value;
  if (mot.toLowerCase() == "wifi" || mot.toLowerCase() == "wi-fi") {
    document.getElementById('fin').style.display = 'inline';
    document.getElementById('valider').disabled = true;
  }
}

function texte() {
  alert('Tony : Vous voilà arrivé(e) à  la fin du périple, répondez donc à  la question suivante : Qu\'a inventé Hedy Lamarr ? Les lettres rassemblées jusqu\'ici pourraient vous servir !');
}
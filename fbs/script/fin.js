function reponse() {
  var mot = document.getElementById('reponse_user').value;
  if (mot.toLowerCase() == "vih" || mot.toLowerCase() == "sida") {
    document.getElementById('avant').style.display = "none";
    document.getElementById('apres').style.display = "flex";
  }
}
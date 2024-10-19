function symptome() {
    var symptome = document.getElementById('symp').value;
    if (symptome.toLowerCase() == "diarrhée" || symptome.toLowerCase() == "vomir" || symptome.toLowerCase() == "vomissement" || symptome.toLowerCase() == "vomissements") {
      document.getElementById('apres').style.display = "inline";
    } else {
      alert("Erreur de saisie ! Petit indice : la réponse est est la même que pour la gastro ;-)")
    }
}

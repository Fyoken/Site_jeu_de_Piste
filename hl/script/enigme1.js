function alerte(text) {
  let code = prompt("Traduction de ce mot ? (Cherchez la clé, c'est la solution à tous vos problèmes)");
  if (code.toLowerCase() == "inventrice") {
    document.getElementById('lettre').textContent = "Lettre à retenir : I.";
    document.getElementById('lien2').style.display = 'inline';
    document.getElementById('message').textContent = "Bravo vous avez réussi l'énigme ! C'était une inventrice ? Mais qu'a-t-elle pu inventer ? Passons vite à la suite, peut-être allons nous le découvrir !";
    elements = document.getElementsByClassName('grille');
    for (var i=0;i<elements.length;i++) {
        elements[i].style.display = 'none';
    }
  }
}

function help() {
  alert("Tony : Que faire ? Si vous cherchez bien, peut-être que vous trouverez la CLÉ de l'énigme !")
}

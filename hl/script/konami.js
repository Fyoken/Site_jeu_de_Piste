var cleAutorisees = {
  37: 'gauche',
  38: 'haut',
  39: 'droite',
  40: 'bas',
  65: 'a',
  66: 'b'
};

var konamiCode = ['haut', 'haut', 'bas', 'bas', 'gauche', 'droite', 'gauche', 'droite', 'b', 'a'];

var konamiCodePosition = 0;

// crée un event listener keydown
document.addEventListener('keydown', function (e) {
  // récupère la clé de la map associée à la touche saisie
  var cle = cleAutorisees[e.keyCode];
  // récupère la clé souhaitée dans le code
  var cleRequise = konamiCode[konamiCodePosition];
  var x = document.getElementById('joueur');
  switch(cle) {
      case 'haut' :
        x.setAttribute("src", "images/haut.jpg");
        break;
      case 'bas' :
        x.setAttribute("src", "images/bas.jpg");
        break;
      case 'gauche' :
        x.setAttribute("src", "images/gauche.jpg");
        break;
      case 'droite' :
        x.setAttribute("src", "images/droite.jpg");
        break;
      case 'b' :
        x.setAttribute("src", "images/b.jpg");
        break;
      case 'a' :
        x.setAttribute("src", "images/a.jpg");
        break;
      default :
        break;
    }
  if (cle == cleRequise) {
    // on avance dans le code
    konamiCodePosition++;

    // si on arrive au bout c'est gagné
    if (konamiCodePosition == konamiCode.length) {
      gagne();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function gagne() {
  document.getElementById('post').innerHTML="<h2 style='font-size: 50px; text-decoration: underline; color : red;text-shadow: 0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black,0px 0px 2px black;'>Lettre à retenir : F.</h2> <br><a id='suite' href='labyrintheFacile.html' style='font-size: 20px;color:white'>Suite</a>";
  document.getElementById('message').innerHTML="Tony : Incroyable, il semblerait que vous n'ayez vraiment pas besoin de mon aide finalement ! Continuons notre périple, j'ai l'impression qu'on touche au but ! Nous allons bientôt retrouver l'invention de Hedy Lamarr, je le sens !";
  document.getElementById('suite').style.display = 'inline';
}

function help() {
  alert("Tony : Indice ? Le clavier ne sert pas qu'à écrire !")
}
function PopupImage(num, img) { 
	w=open("",'image','weigth=toolbar=no,scrollbars=no, width=550 height=550');	
  w.document.write("<HTML><BODY>");
  if (num == 1) {
	  w.document.write("<P>Oh nan le thermomètre affiche une erreur ! Trouvez vite sa valeur d'origine ! </P>");
  } 
  
  if (num == 2) {
    w.document.write("<P> Bravo, vous avez trouvé l'équation à résoudre ! Il ne vous reste plus qu'à trouver l'inconnue de l'équation pour trouver la température du patient !</P>");
  }
  
  w.document.write("<IMG width=500 height=400 src='"+img+"'><br>");
	w.document.write("<INPUT type='button' value='Fermer la fenêtre'  onclick='window.close()'>");
	w.document.write("</BODY></HTML>");
}

function temperature() {
    var code = document.getElementById('temp').value;
    if (code.toLowerCase() == "40") {
      document.getElementById('apres').style.display = "inline";
    } else {
      alert("Erreur de valeur !")
    }
}

function aide() {
    alert("Retrouve le numéro correspondant à un élément spécifique. Il t'aidera dans tes calculs ;)")
}
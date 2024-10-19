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

function toux() {
    var res = document.getElementById('toux').value;
    if (res.toLowerCase() == "toux" || res.toLowerCase() == "tousser") {
      document.getElementById('apres').style.display = "inline";
    } else {
      alert("Erreur de valeur !")
    }
}

function aide() {
  alert("Entendez-vous quelque chose ? Peut-être devriez-vous activer le son, ou l'autoriser...");
}
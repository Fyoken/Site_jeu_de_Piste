function PopupImage(num, img) { 
	w=open("",'image','weigth=toolbar=no,scrollbars=no, width=550 height=550');	
  w.document.write("<HTML><BODY>");
  if (num == 1) {
	  w.document.write("<P>Oh, un ibuprofen, il avait mal à la tête de ce que j'ai entendu..</P>");
  } 
  
  if (num == 2) {
    w.document.write("<P>Encore un anti-douleur ? Mh, il devait avoir vraiment mal..</P>");
  }

  if (num == 3) {
    w.document.write("<P>Je pense que ça doit avoir un lien, c'est le troisième..</P>");
  }

  if (num == 4) {
    w.document.write("<P>On a trouvé la boite d'un des médicaments, utilise-la pour trouver de quoi souffre le patient !</P>");
  }
  
  w.document.write("<IMG width=500 height=400 src='"+img+"'><br>");
	w.document.write("<INPUT type='button' value='Fermer la fenêtre'  onclick='window.close()'>");
	w.document.write("</BODY></HTML>");
}

function symptome() {
    var symptome = document.getElementById('sympt').value;
    if (symptome.toLowerCase() == "maux de tête" || symptome.toLowerCase() == "maux de tete" || symptome.toLowerCase() == "douleurs musculaires") {
      document.getElementById('apres').style.display = "inline";
    } else {
      alert("Erreur de saisie ! Petit indice : la réponse est au pluriel et sans majuscule ;-)")
    }
}

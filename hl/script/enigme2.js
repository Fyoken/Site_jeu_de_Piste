function help() {
  alert("Tony : Indice ? 2 opus de cette série de jeux sont sortis récemment sur Nintendo Switch.")
}

function chara() {
  var mot = document.getElementById('charade').value;
  if (mot.toLowerCase() == "pokémon" || mot.toLowerCase() == "pokemon") {
    document.getElementById('valider').disabled = true;
    document.getElementById('post').innerHTML="<br><br><br><br><br><br><br><a id='konami' href='konami.html' style='font-size: 20px;color:white;margin:100px;'>Suite</a>";
    document.getElementById('message').innerHTML="Tony : Wow, vous avez trouvé la solution ! Heureusement que je peux compter sur vous ! Bien, passons à la suite, dépêchons-nous, le temps presse... J'ai l'impression que plus le temps passe et plus internet divague !";
  }
}
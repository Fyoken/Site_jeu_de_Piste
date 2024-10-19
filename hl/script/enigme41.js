function help() {
  alert("T0nY : InD1c3 ? V0u5 n3 Tr0uV3z Pa5 ? V0u5 Êt35 t1MbrÉ5 !");
}

function devine() {
  var mot = document.getElementById('devinette').value;
  if (mot.toLowerCase() == "enveloppe") {
    document.getElementById('valider').disabled = true;
    document.getElementById('devinette2').style.display = "inline";
  }
}
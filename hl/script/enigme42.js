function help() {
  alert("T0nY : InD1c3 ? J3 c0Mp053 c3rTa1n5 m0t5.");
}

function devine() {
  var mot = document.getElementById('devinette').value;
  if (mot.toLowerCase() == "a") {
    document.getElementById('valider').disabled = true;
    document.getElementById('lettre').textContent = "L3tTr3 À R3t3n1r : W.";
    document.getElementById('suite').style.display = "inline";
  }
}
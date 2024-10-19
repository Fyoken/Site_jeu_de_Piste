var gg = 0;
function jouer(lettre) {
  const l = lettre;
  var essai = parseInt(document.getElementById('essai').textContent, 10);
  switch (lettre) {
    case 'C':
      document.getElementById('l1').textContent = l;
      gg += 1;
      document.getElementById('C').disabled = true;
      break;
    case 'H':
      document.getElementById('l2').textContent = l;
      gg += 1;
      document.getElementById('H').disabled = true;
      break;
    case 'I':
      document.getElementById('l3').textContent = l;
      gg += 1;
      document.getElementById('I').disabled = true;
      break;
    case 'F':
      document.getElementById('l4').textContent = l;
      document.getElementById('l5').textContent = l;
      gg += 1;
      document.getElementById('F').disabled = true;
      break;
    case 'R':
      document.getElementById('l6').textContent = l;
      gg += 1;
      document.getElementById('R').disabled = true;
      break;
    case 'E':
      document.getElementById('l7').textContent = l;
      document.getElementById('l9').textContent = l;
      document.getElementById('E').disabled = true;
      gg += 1;
      break;
    case 'M':
      document.getElementById('l8').textContent = l;
      gg += 1;
      document.getElementById('M').disabled = true;
      break;
    case 'N':
      document.getElementById('l10').textContent = l;
      gg += 1;
      document.getElementById('N').disabled = true;
      break;
    case 'T':
      document.getElementById('l11').textContent = l;
      gg += 1;
      document.getElementById('T').disabled = true;
      break;
    default:
      essai -= 1;
      document.getElementById('essai').textContent = essai;
      document.getElementById(lettre).disabled = true;
      break;
  }
  if (essai == 0) {
    document.getElementById('parag').textContent = "Perdu";
    document.getElementById('A').disabled = true;
    document.getElementById('B').disabled = true;
    document.getElementById('C').disabled = true;
    document.getElementById('D').disabled = true;
    document.getElementById('E').disabled = true;
    document.getElementById('F').disabled = true;
    document.getElementById('G').disabled = true;
    document.getElementById('H').disabled = true;
    document.getElementById('I').disabled = true;
    document.getElementById('J').disabled = true;
    document.getElementById('K').disabled = true;
    document.getElementById('L').disabled = true;
    document.getElementById('M').disabled = true;
    document.getElementById('N').disabled = true;
    document.getElementById('O').disabled = true;
    document.getElementById('P').disabled = true;
    document.getElementById('Q').disabled = true;
    document.getElementById('R').disabled = true;
    document.getElementById('S').disabled = true;
    document.getElementById('T').disabled = true;
    document.getElementById('U').disabled = true;
    document.getElementById('V').disabled = true;
    document.getElementById('W').disabled = true;
    document.getElementById('X').disabled = true;
    document.getElementById('Y').disabled = true;
    document.getElementById('Z').disabled = true;

  } else if (essai > 0 && gg == 9) {
    document.getElementById('parag').textContent = "696e76656e7472696365 = inventrice";
    document.getElementById('A').disabled = true;
    document.getElementById('B').disabled = true;
    document.getElementById('C').disabled = true;
    document.getElementById('D').disabled = true;
    document.getElementById('E').disabled = true;
    document.getElementById('F').disabled = true;
    document.getElementById('G').disabled = true;
    document.getElementById('H').disabled = true;
    document.getElementById('I').disabled = true;
    document.getElementById('J').disabled = true;
    document.getElementById('K').disabled = true;
    document.getElementById('L').disabled = true;
    document.getElementById('M').disabled = true;
    document.getElementById('N').disabled = true;
    document.getElementById('O').disabled = true;
    document.getElementById('P').disabled = true;
    document.getElementById('Q').disabled = true;
    document.getElementById('R').disabled = true;
    document.getElementById('S').disabled = true;
    document.getElementById('T').disabled = true;
    document.getElementById('U').disabled = true;
    document.getElementById('V').disabled = true;
    document.getElementById('W').disabled = true;
    document.getElementById('X').disabled = true;
    document.getElementById('Y').disabled = true;
    document.getElementById('Z').disabled = true;
    document.getElementById('lienwin').style.display = 'inline';
    document.getElementById('reload').disabled = true;
  }
}

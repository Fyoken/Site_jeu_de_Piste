var gg = 0;
function mot(lettre) {
  $("center.cache").removeClass("cache");
  $("center.reponse").addClass("cache");
  switch (lettre) {
    case 'P':
      document.getElementById('l1').textContent = 'P';
      gg += 1;
      document.getElementById('term_p').style.pointerEvents = 'none';
      break;
    case 'U':
      document.getElementById('l2').textContent = 'U';
      gg += 1;
      document.getElementById('term_u').style.pointerEvents = 'none';
      break;
    case 'Z1':
      document.getElementById('l3').textContent = 'Z';  
      gg += 1;
      document.getElementById('term_z1').style.pointerEvents = 'none';
      break;
    case 'Z2':
      document.getElementById('l4').textContent = 'Z';
      gg += 1;
      document.getElementById('term_z2').style.pointerEvents = 'none';
      break;
    case 'L':
      document.getElementById('l5').textContent = 'L';
      gg += 1;
      document.getElementById('term_l').style.pointerEvents = 'none';
      break;
    case 'E':
      document.getElementById('l6').textContent = 'E';
      gg += 1;
      document.getElementById('term_e').style.pointerEvents = 'none';
      break;
  }

  if (gg == 6) {
    document.getElementById('puzzle').style.display = 'inline';
  }
}

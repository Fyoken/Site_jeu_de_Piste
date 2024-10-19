function reponse() {
  var rep = document.getElementById('gangl').value;
  if (rep.toLowerCase() == "ganglion" || rep.toLowerCase() == "ganglions") {
    document.getElementById('apres').style.display = "inline";
  } else {
    alert("Ce n'est pas ça malheureusement...")
  }
}
function plaque_rouge() {
    var code = document.getElementById('plaque').value;
    if (code.toLowerCase() == "plaque rouge" || code.toLowerCase() == "plaques rouges") {
          document.getElementById('lienwin').style.display = 'inline';

    } else {
      alert("Erreur de donnée !")
    }
}

function aide() {
    alert("La réponse se compose de deux mots (un nom et une couleur)")
}

class Block {
  constructor(x, y, w, h, value) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.value = value;
  }

  visuel() {
    if (this.value) {
      let padding = 5;
      ctx.strokeStyle = "#000";
      ctx.font = (this.w / 4).toString() + "px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      if (this.value == 1) {
      var img1 = document.getElementById("1");
      ctx.drawImage(img1, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }
      
      if (this.value == 2) {
      var img2 = document.getElementById("2");
      ctx.drawImage(img2, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }      
      
      if (this.value == 3) {
      var img3 = document.getElementById("3");
      ctx.drawImage(img3, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }
      
      if (this.value == 4) {
      var img4 = document.getElementById("4");
      ctx.drawImage(img4, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }
      
      if (this.value == 5) {
      var img5 = document.getElementById("5");
      ctx.drawImage(img5, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }
      
      if (this.value == 6) {
      var img6 = document.getElementById("6");
      ctx.drawImage(img6, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }
      
      if (this.value == 7) {
      var img7 = document.getElementById("7");
      ctx.drawImage(img7, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }
      
      if (this.value == 8) {
      var img8 = document.getElementById("8");
      ctx.drawImage(img8, this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      }
      
      ctx.strokeRect(this.x + padding, this.y + padding, this.w - padding, this.h - padding);
      ctx.fillStyle = "#000";
      ctx.fillText(this.value.toString(), this.x + this.w / 2, this.y + this.h / 2, width * 0.75);
    }
  }

  collidePoint(x, y) {
    return (
      x > this.x &&
      x < this.x + this.w &&
      y > this.y &&
      y < this.y + this.h
    );
  }

  positionNew(position) {
    moving++;
    let pos = {
      x: position.x,
      y: position.y,
    }
    let vel = {
      x: (this.x - pos.x) / 10,
      y: (this.y - pos.y) / 10,
    }
    let self = this;
    let n = 0;
    let movement = () => {
      visuelAll();
      self.x -= vel.x;
      self.y -= vel.y;
      if (n >= 10) {
        self.x = pos.x;
        self.y = pos.y;
        moving--;
      }
      else {
        setTimeout(movement, 15);
        n++;
      }
    };
    setTimeout(movement, 15);
  }
}

function reset(array) {
  for (let i = 0; i < array.length; ++i) {
    let newI = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[newI];
    array[newI] = temp;
  }
}

function voisinValide(ind1, ind2) {
  let pos1 = position(ind1);
  let pos2 = position(ind2);
  let dist1 = Math.abs(pos1[0] - pos2[0]);
  let dist2 = Math.abs(pos1[1] - pos2[1]);
  if (!dist1 || !dist2) {
    if (dist1 === 1 || dist2 === 1) {
      return dist1 !== dist2;
    }
  }
  return false;
}

function position(index) {
  return [ index % boardSize, Math.floor(index / boardSize) ];
}

function findZero() {
  for (let i = 0; i < board.length; ++i) {
    if (board[i].value === 0) {
      return i;
    }
  }
}

function win() {
  if (!moving) {
     document.getElementById('victoire').style.display = 'inline';
  }
  else {
    setTimeout(win, 150);
  }
}

function visuelAll() {
  ctx.clearRect(0, 0, width, height);
  board.forEach(block => {
    block.visuel();
  });
}

function update() {
  visuelAll();
  if (checkWin()) {
    setTimeout(() => {
      canvas.removeEventListener("click", clique);
      setTimeout(win, 1000);
    }, 200);
  }
}

function checkWin() {
  let noZ = board.slice(0);
  noZ.splice(findZero(), 1);
  for (let i = 1; i < noZ.length; ++i) {
    if (noZ[i].value < noZ[i - 1].value) {
      return false;
    }
  }

  if (findZero() != 8) {
    return false;
  }

  return true;
}

const canvas = document.getElementById("display");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
let boardSize;
let board;
let moving;

function init() {
  moving = 0;
  boardSize = 3;
  if (boardSize < 2 || boardSize > 5 || isNaN(boardSize)) {
    boardSize = 4;
  }
  board = Array.from(Array(boardSize ** 2).keys());
  reset(board);
  for (let i = 0; i < board.length; ++i) {
    let pos = position(i);
    let w = width / boardSize;
    let h = height / boardSize;
    board[i] = new Block(pos[0] * w, pos[1] * h, w, h, board[i]);
  }
  update();
}

function clique(e) {
  if (!moving) {
    let rect = canvas.getBoundingClientRect();
    for (let i = 0; i < board.length; ++i) {
      if (board[i].collidePoint(e.clientX - rect.x, e.clientY - rect.y)) {
        let zIndex = findZero();
        if (voisinValide(i, zIndex)) {
          let tempPos = {
            x: board[i].x,
            y: board[i].y,
          };
          board[i].positionNew(board[zIndex]);
          board[zIndex].positionNew(tempPos);
          let temp = board[i];
          board[i] = board[zIndex];
          board[zIndex] = temp;
        }
        break;
      }
    }
    update();
  }
}


canvas.addEventListener("click", clique);
document.getElementById("reset").onclick = init;
init();

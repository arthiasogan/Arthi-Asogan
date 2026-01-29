class Game {
  constructor() {
    this.board = Array(9).fill("");
    this.currentPlayer = "X";
    this.gameOver = false;
  }

  makeMove = (index) => {
    if (this.board[index] || this.gameOver) return;

    this.board[index] = this.currentPlayer;

    if (this.checkWin()) {
      this.gameOver = true;
      document.getElementById("status").innerText =
        `${this.currentPlayer} Wins 🎉`;
      this.saveScore(this.currentPlayer);
      renderLeaderboard();
      return;
    }

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  };

  checkWin() {
    const patterns = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    return patterns.some(p =>
      p.reduce(
        (win, i) => win && this.board[i] === this.currentPlayer,
        true
      )
    );
  }

  saveScore(player) {
    const scores =
      JSON.parse(localStorage.getItem("scores")) || {};
    scores[player] = (scores[player] || 0) + 1;
    localStorage.setItem("scores", JSON.stringify(scores));
  }
}

const game = new Game();
const boardDiv = document.getElementById("board");

const renderBoard = () => {
  boardDiv.innerHTML = "";
  game.board.forEach((value, index) => {
    const btn = document.createElement("button");
    btn.className = "cell";
    btn.innerText = value;
    btn.onclick = () => {
      game.makeMove(index);
      renderBoard();
    };
    boardDiv.appendChild(btn);
  });
};

const renderLeaderboard = () => {
  const leaderboard = document.getElementById("leaderboard");
  const scores =
    JSON.parse(localStorage.getItem("scores")) || {};

  leaderboard.innerHTML = "";
  Object.entries(scores).forEach(([player, score]) => {
    const li = document.createElement("li");
    li.innerText = `${player} : ${score}`;
    leaderboard.appendChild(li);
  });
};

renderBoard();
renderLeaderboard();
document.getElementById("get").onclick=()=>location.reload();
new game();

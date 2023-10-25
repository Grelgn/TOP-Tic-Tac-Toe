const gameBoard = (function () {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    return { board };
})();

function createPlayer (marker) {
    const playerMarker = marker;

    return { playerMarker }
}

const player1 = createPlayer("X");
const player2 = createPlayer("O");

const displayController = (function () {
    const boxes = document.querySelectorAll(".box");
    const turn = document.querySelector(".turn");
    let clickCount = 0;
    boxes.forEach((element) => {
        element.addEventListener("click", (e)  => {
            element.classList.contains("clicked") ? "" : clickCount++;
            element.classList.add("clicked");
            let value = 0;
            clickCount % 2 != 0 ? value = player1.playerMarker : value = player2.playerMarker
            let count = 0;
            let currentRow = 0;

            //Displaying markers
            gameBoard.board.forEach((row) => {
                let currentItem = 0;
                row.forEach((item) => {
                    let id = 'box' + count;
                    let box = document.querySelector(`#${id}`);
                    if (element.id == id && gameBoard.board[currentRow][currentItem] == "") {
                        gameBoard.board[currentRow][currentItem] = value;
                        box.textContent = value;
                    }
                    count++;
                    currentItem++;
                })
                currentRow++;
            })

            //Changing turn text and color
            clickCount % 2 == 0 ? turn.style.setProperty("color", "green") : turn.style.setProperty("color", "red");
            console.log(turn.textContent);
            clickCount % 2 == 0 ? turn.innerHTML = turn.innerHTML.replace("Player 2 (O)", "Player 1 (X)") : turn.innerHTML = turn.innerHTML.replace("Player 1 (X)", "Player 2 (O)");
            clickCount == 9 ? turn.style.visibility = "hidden" : "";
            clickCount == 9 ? game.congrats.innerHTML = "DRAW" : "";
        });
    })
    return { boxes, turn }
})();

const game = (function () {
    const congrats = document.querySelector(".congrats");
    displayController.boxes.forEach((element) => {
        element.addEventListener("click", (e)  => {
            if ((gameBoard.board[0][0] == "X" && gameBoard.board[0][1] == "X" && gameBoard.board[0][2] == "X") ||
                (gameBoard.board[1][0] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[1][2] == "X") ||
                (gameBoard.board[2][0] == "X" && gameBoard.board[2][1] == "X" && gameBoard.board[2][2] == "X") ||
                (gameBoard.board[0][0] == "X" && gameBoard.board[1][0] == "X" && gameBoard.board[2][0] == "X") ||
                (gameBoard.board[0][1] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][1] == "X") ||
                (gameBoard.board[0][2] == "X" && gameBoard.board[1][2] == "X" && gameBoard.board[2][2] == "X") ||
                (gameBoard.board[0][0] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][2] == "X") ||
                (gameBoard.board[0][2] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][0] == "X")) 
                    {
                displayController.turn.style.visibility = "hidden"
                congrats.innerHTML = "Congratulations <b>Player 1!</b> You Won!";
            } else 
            if ((gameBoard.board[0][0] == "O" && gameBoard.board[0][1] == "O" && gameBoard.board[0][2] == "O") ||
                (gameBoard.board[1][0] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[1][2] == "O") ||
                (gameBoard.board[2][0] == "O" && gameBoard.board[2][1] == "O" && gameBoard.board[2][2] == "O") ||
                (gameBoard.board[0][0] == "O" && gameBoard.board[1][0] == "O" && gameBoard.board[2][0] == "O") ||
                (gameBoard.board[0][1] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][1] == "O") ||
                (gameBoard.board[0][2] == "O" && gameBoard.board[1][2] == "O" && gameBoard.board[2][2] == "O") ||
                (gameBoard.board[0][0] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][2] == "O") ||
                (gameBoard.board[0][2] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][0] == "O")) 
                    {
                displayController.turn.style.visibility = "hidden"
                congrats.innerHTML = "Congratulations <b>Player 2!</b> You Won!";

            }
        });
    });
    return { congrats }
})();
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
    let points = 0;
    const getPoints = () => points;
    const givePoints = () => points++;

    return { playerMarker, getPoints, givePoints }
}

const player1 = createPlayer("X");
const player2 = createPlayer("O");

const displayController = (function () {
    const boxes = document.querySelectorAll(".box");
    let clickCount = 0;
    boxes.forEach((element) => {
        element.addEventListener("click", (e)  => {
            element.classList.contains("clicked") ? "" : clickCount++;
            element.classList.add("clicked");
            let value = 0;
            clickCount % 2 != 0 ? value = player1.playerMarker : value = player2.playerMarker
            let count = 0;
            let currentRow = 0;

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
        });
    })
})();


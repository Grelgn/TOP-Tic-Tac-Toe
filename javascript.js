const gameBoard = (function () {
    function createPlayer (marker) {
        const playerMarker = marker;
        let points = 0;
        const getPoints = () => points;
        const givePoints = () => points++;

        return { playerMarker, getPoints, givePoints }
    }

    const player1 = createPlayer("X");
    const player2 = createPlayer("O");

    let gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const renderContents = (function () {
        let count = 0;
        gameBoard.forEach((element) => {
            element.forEach((item) => {
                let id = '#box' + count;
                let box = document.querySelector(`${id}`);
                box.textContent = item;
                count++;
            })
        })
    })();


})();
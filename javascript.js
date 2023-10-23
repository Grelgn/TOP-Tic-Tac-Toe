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

    //0 == empty, 1 == "X", 2 == "0"
    let gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    
})();
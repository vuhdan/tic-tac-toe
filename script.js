const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const placeMarker = (i, marker) => board[i] = marker;
    const getBoard = () => board;
    
    return{
        placeMarker, getBoard
    };
})();

const Player = (name, marker) =>{
    const getMarker = () => marker;
    const getName = () => name;


    return {getName, getMarker}

};

const player1 = Player('Player X', 'X');
const player2 = Player('Player O', 'O');

const displayController = (() => {
    const tile0 = document.querySelector('#tile0');
    const tile1 = document.querySelector('#tile1');
    const tile2 = document.querySelector('#tile2');
    const tile3 = document.querySelector('#tile3');
    const tile4 = document.querySelector('#tile4');
    const tile5 = document.querySelector('#tile5');
    const tile6 = document.querySelector('#tile6');
    const tile7 = document.querySelector('#tile7');
    const tile8 = document.querySelector('#tile8');
    const turn = document.querySelector('#turn');
    const resetBtn = document.querySelector('#reset');

    //const tileClass = document.getElementsByClassName("tile");

    const tiles = [tile0, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8];
    let toggle = true;

    const checkWin = function(){
        if(tile0.innerHTML === tile1.innerHTML & tile1.innerHTML === tile2.innerHTML & tile0.innerHTML != ""){
            if(tile0.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        } else if(tile0.innerHTML === tile4.innerHTML & tile4.innerHTML === tile8.innerHTML & tile0.innerHTML != ""){
            if(tile0.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        }  else if(tile0.innerHTML === tile3.innerHTML & tile3.innerHTML === tile6.innerHTML & tile0.innerHTML != ""){
            if(tile0.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        } else if(tile1.innerHTML === tile4.innerHTML & tile4.innerHTML === tile7.innerHTML & tile1.innerHTML != ""){
            if(tile1.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        } else if(tile2.innerHTML === tile5.innerHTML & tile5.innerHTML === tile8.innerHTML & tile2.innerHTML != ""){
            if(tile2.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        } else if(tile2.innerHTML === tile4.innerHTML & tile4.innerHTML === tile6.innerHTML & tile2.innerHTML != ""){
            if(tile2.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        } else if(tile3.innerHTML === tile4.innerHTML & tile4.innerHTML === tile5.innerHTML & tile3.innerHTML != ""){
            if(tile3.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        } else if(tile6.innerHTML === tile7.innerHTML & tile7.innerHTML === tile8.innerHTML & tile6.innerHTML != ""){
            if(tile6.innerHTML === player1.getMarker()){
                alert(player1.getName() + " wins!")
                location.reload();
            } else{
                alert(player2.getName() + " wins!")
                location.reload();
            }
        } else if(tile0.innerHTML != "" & tile1.innerHTML != "" & tile2.innerHTML != "" & tile3.innerHTML != "" & 
        tile4.innerHTML != "" & tile5.innerHTML != "" & tile6.innerHTML != "" & tile7.innerHTML != "" & tile8.innerHTML != ""){
            alert("Tie!")
            location.reload();
        }
    }

    const markTile = function(e){
        i = e.target.dataset.index;
        if(gameBoard.getBoard()[i] === ""){
            console.log(true);
            if(toggle){
                gameBoard.getBoard()[i] = player1.getMarker();
                toggle = false;
            } else {
                gameBoard.getBoard()[i] = player2.getMarker();
                toggle = true;
            }
        } else{
            
        }

        drawBoard();
        checkWin();
    }

    for(let i=0; i<tiles.length; i++){
        tiles[i].dataset.index = i;
        tiles[i].addEventListener('click', markTile);
    }

    const drawBoard = function(){
        for(let i=0; i<gameBoard.getBoard().length; i++){
            tiles[i].innerHTML = gameBoard.getBoard()[i];
        }
        if(toggle){
            turn.innerHTML = player1.getName() + "'s turn.";
        } else {
            turn.innerHTML = player2.getName() + "'s turn.";
        } 
    }

    resetBtn.addEventListener('click', function(){
        location.reload()
    });
})();

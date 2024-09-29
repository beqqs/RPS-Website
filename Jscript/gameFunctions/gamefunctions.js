
let captionOfField = document.getElementById('playingField').value;
let map1 = new Map();

map1.set('player 1','empty');
map1.set('player 2','empty');
map1.set('computer','empty');

// adds the text to the field
function appendField(newText){
    var elem = document.getElementById('playingField');
    var old  = elem.value;
    elem.value = old + '\r\n' + newText;
    scrollDown();
    }
function scrollDown(){
    elem = document.getElementById('playingField');
    elem.scrollTop = elem.scrollHeight;
}
//clears the text box so the file stays readable
function clearBox(){
    document.getElementById('playingField').value = '';
    map1.set('player 1','empty');
    map1.set('player 2','empty');
    map1.set('computer','empty');
}

function calculateWinner(player1, player2){
    //DRAW:
    if (map1.get(player1) == map1.get(player2)){ ;
        appendField("Both Players picked " + map1.get('player 1') + " Its a Draw, No Winner!"); 
    } 
    //Player 1 looses
    else if (map1.get(player1) == 'Rock' & map1.get(player2)=='Paper'){
        appendField(player2 + " wins!");
    }
    else if (map1.get(player1) == 'Paper' & map1.get(player2)=='Scissors'){
        appendField(player2 + " wins!");
    }
    else if (map1.get(player1) == 'Scissors' & map1.get(player2)=='Rock'){
        appendField(player2 + " wins!");
        }
    //Player 2 looses
    else if (map1.get(player1) == 'Rock' & map1.get(player2)=='Scissors'){
        appendField(player1 + " wins!");
    }
    else if (map1.get(player1) == 'Paper' & map1.get(player2)=='Rock'){
        appendField(player1 + " wins!");
    }
    else if (map1.get(player1) == 'Scissors' & map1.get(player2)=='Paper'){
        appendField(player1 + " wins!");
    }
    map1.set('player 1','empty');
    map1.set('player 2','empty');
    map1.set('computer','empty');
    }

function makeRandomMove(){
    var items=["Scissors","Rock","Paper"];
    var rdmNumber = Math.floor(Math.random() * 3);
    map1.set('computer',items[rdmNumber]);
}
        
//main game mechanic 
function playMove(playerIndex,move,playercount){
    switch(playercount){
        case 1: 
                newText = 'You' + ' played ' + move;
                appendField(newText);
                map1.set(playerIndex,move);
                makeRandomMove();
                appendField("computer played "+ map1.get('computer'));
                calculateWinner("player 1", "computer");
                break;
        case 2: 
                if (map1.get(playerIndex) == 'empty'){
                    map1.set(playerIndex,move);
                    //newText = playerIndex + ' played ' + move;
                    //appendField(newText);
                    appendField(playerIndex + " played a move!");
                    break;
                } else{
                    appendField(playerIndex + ' already has selected a move!' + 
                    '\nPlease pick a different player');
                    break;
                }
        default : 
                break;
    }
    if(map1.get('player 1') != 'empty' && map1.get('player 2') != 'empty'){
        calculateWinner('player 1','player 2');
    }
        
}

function goToPage(name){
    let targetlink = name +'.html';
    window.location.href = targetlink;
    
}

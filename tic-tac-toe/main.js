var content = document.getElementById('content');

var ticTacToe = [["X","X","X"],
                 [" "," ","" ],
                 [" "," "," "]];

var currentTurn = "X";

function getCell(row, column) {
  return ticTacToe[row][column];
};

function renderRow(row) {
    cellsHTML = row.map(renderCell).join("\n");
    return `<div class="w-50 text-center row">
                ${cellsHTML}
            </div>`    
};

function renderCell(gameVal) {
    return `<button class = "cell">${gameVal}</button>`
};


function renderGame(game) {
    // Change this render function to use the "game" parameter

    boardHTML = game.map(renderRow).join("\n");
    return `
    <div class="container d-flex flex-column justify-content-start align-items-center">
        <h4>It's player O's turn!</h4>
        ${boardHTML}
    </div>
` 
};

content.innerHTML = renderGame(ticTacToe);
console.log(renderGame(ticTacToe));
    
    
    
    
    
    
//     `
//         <div class="container d-flex flex-column justify-content-start align-items-center">
//             <h4>It's player O's turn!</h4>
//             <div class="w-50 text-center row">
//                 <button>X</button>
//                 <button>O</button>
//                 <button>X</button>
//             </div>
//             <div class="w-50 text-center row">
//                 <button>-</button>
//                 <button>-</button>
//                 <button>-</button>
//             </div>
//             <div class="w-50 text-center row">
//                 <button>O</button>
//                 <button>-</button>
//                 <button>X</button>
//             </div>
//         </div>
//     `
// 
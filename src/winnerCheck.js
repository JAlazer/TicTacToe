/**
 * purpose: to check if there is a winner and who that winner might be
 * 
 * @param {Array} board: the tic tac toe board as a 1D array
 * @param {Number} i: the spot on the board which has just been updated
 * @returns The string 'X' or 'O' if either have won, otherwise, null
 */
export default function winCheck(board, i) {
    const columnNumber = i % 3;
    const rowNumber = Math.floor(i / 3);

    // to make diagonal checking easier 
    let topRowFlag = false;
    let centerRowFlag = false;
    let bottomRowFlag = false;
    
    let leftColFlag = false;
    let centerColFlag = false;
    let rightColFlag = false;

    // row checks!
    // in left column
    if (columnNumber === 0) {
        if (board[i] === board[i+1] && board[i] === board[i+2]) {
            return board[i];
        }

        leftColFlag = true;
    // in middle column
    } else if (columnNumber === 1) {
        if (board[i] === board[i-1] && board[i] === board[i+1]) {
            return board[i];
        }

        centerColFlag = true;
    // in the right column
    } else if (columnNumber === 2) {
        if (board[i] === board[i-1] && board[i] === board[i-2]) {
            return board[i];
        }
        
        rightColFlag = true;
    }

    // column checks!
    // in the top row
    if (rowNumber === 0) {
        if (board[i] === board[i+3] && board[i] === board[i+6]) {
            return board[i];
        }

        topRowFlag = true;
    // in the center row
    } else if (rowNumber === 1) {
        if (board[i] === board[i-3] && board[i] === board[i+3]) {
            return board[i];
        }

        centerRowFlag = true;
    // in the bottom row
    } else if (rowNumber === 2) {
        if (board[i] === board[i-3] && board[i] === board[i-6]) {
            return board[i];
        }

        bottomRowFlag = true;
    }

    // a diagonal check is only necessary if the player has clicked the:
    // - the top-left
    // - top-right
    // - center
    // - bottom-left
    // - bottom-right
    if (topRowFlag && leftColFlag) {
        // in the top left
        if (board[i] === board[i+1+3] && board[i] === board[i+2+6]) {
            return board[i];
        }
    } else if (topRowFlag && rightColFlag) {
        // in the top right
        if (board[i] === board[i-1+3] && board[i] === board[i-2+6]) {
            return board[i];
        }
    } else if (centerColFlag && centerRowFlag) {
        // in the center
        if (board[i] === board[i-1-3] && board[i] === board[i+1+3]) {
            return board[i];
        }
    } else if (bottomRowFlag && leftColFlag) {
        // in the bottom left
        if (board[i] === board[i+1-3] && board[i] === board[i+2-6]) {
            return board[i];
        }
    } else if (bottomRowFlag && rightColFlag) {
        // in bottom right
        if (board[i] === board[i-1-3] && board[i] === board[i-2-6]) {
            return board[i];
        }
    }

    
    // checking for a tie
    let j = 0;
    while (board[j]) {
        if (j === board.length - 1) {
            return "T";
        }
        j++;
    }

    return null;
}
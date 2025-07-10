import winCheck from "../winnerCheck.js";


const tieEx = [
    "X", "O", "X",
    "O", "X", "O",
    "O", "X", "O"
]

const xWinRow = [
    "X", "X", "X",
    null, "O", null,
    "X", null, null
]

const oWinCol = [
    "O", null, "X",
    "O", null, null,
    "O", "X", "X"
]

const xWinDiagonal = [
    "X", null, "O",
    null, "X", "O",
    null, "O", "X"
]

test("Is there a tie?", () => {
    
})
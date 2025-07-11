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

const noWin = [
    "X", null, "O",
    null, null, "X",
    null, null, null
]

test("Is there a tie?", () => {
    expect(winCheck(tieEx, 8)).toBe("T")
})

test("Row win for X", () => {
    expect(winCheck(xWinRow, 2)).toBe("X")
})

test("Column win for O", () => {
    expect(winCheck(oWinCol, 3)).toBe("O")
})

test("Diagonal win for X", () => {
    expect(winCheck(xWinDiagonal, 0)).toBe("X")
})

test("No condition met yet", () => {
    expect(winCheck(noWin, 2)).toBe(null)
})


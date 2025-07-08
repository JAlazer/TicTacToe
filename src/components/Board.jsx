import Square from "./Square.jsx";
import { useState } from "react";

export default function Board() {
    // underlying representation of the board
    const [squares, setSquare] = useState(Array(9).fill(null)) 
    const [isXTurn, setNextTurn] = useState(true) // turn logic state
    
    // purpose: update the representation of the board from clicking on a Square
    function handleClick(i) {
        const nextSqr = squares.slice() // copy of the current state of Board
        // check if there is letter already in square i
        if (squares[i]) {
            return console.log("Snooze ya lose bud!");
        }
        // alternating turn logic
        if (isXTurn) {
            nextSqr[i] = "X"
        } else {
            nextSqr[i] = "O"
        }
        setSquare(nextSqr)
        setNextTurn(!isXTurn)
    }

    return(
    <>
        <div className='board-row'>
            <Square val={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square val={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square val={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className='board-row'>
            <Square val={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square val={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square val={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className='board-row'>
            <Square val={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square val={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square val={squares[8]} onSquareClick={() => handleClick(8)}/>
         </div>
    </>
    )
}
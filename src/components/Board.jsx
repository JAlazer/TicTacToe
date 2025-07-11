import Square from "./Square.jsx";
import winCheck from "../winnerCheck.js";
import { useState } from "react";

export default function Board() {
    // underlying representation of the board
    const [squares, setSquare] = useState(Array(9).fill(null)) 
    const [isXTurn, setNextTurn] = useState(true) // turn logic state
    const [isGameOver, setGame] = useState(false) 
    
    // purpose: update the representation of the board from clicking on a Square
    function handleClick(i) {
        if (!isGameOver) {
            const nextSqr = squares.slice() // copy of the current state of Board
            // check if there is letter already in square i
            if (squares[i]) {
                return console.log("Snooze ya lose bud!");
            }

            console.log(winCheck(squares, i))

            // alternating turn logic
            if (isXTurn) {
                nextSqr[i] = "X"
            } else {
                nextSqr[i] = "O"
            }

            // win condition check
            let winRes = winCheck(nextSqr, i)
            if(winRes) {
                setSquare(nextSqr)
                setGame(true)
                if (winRes !== "T") {
                    return console.log("The games up, player: " + winCheck(nextSqr, i))
                } else {
                    return console.log("It's a Tie!")
                }
            }
            setSquare(nextSqr)
            setNextTurn(!isXTurn)
        } else {
            return console.log(isXTurn);
        }
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

 

export default function Square( {val, onSquareClick} ) {

    return (
    <button 
        className="square"
        onClick={onSquareClick}
    >
        {val} 
    </button>)
}

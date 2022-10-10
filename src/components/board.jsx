import {React , useState ,  useEffect} from 'react'
import Squarebox from './squarebox'
import './board.css'

const init = ["","","","","","","","","",]

function Board() {
    const [game, setgame] = useState(init)
    const [isX, setisX] = useState(false)

    const onsquareclick = (index) =>{
        let myVal = Array.from(game)
        myVal[index] = isX ? "X" : "O"
        setgame(myVal)
        setisX(!isX)
    }

  

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', game[0], game[1], game[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (game[a] && game[a] === game[b] && game[a] === game[c]) {
                return game[a];
            }
        }
        return null;
    }

    useEffect(() => {
        const winner = checkWinner()
        
        if(winner){
            setTimeout(() => alert(`${winner} has won the game`), 350 );
            setTimeout(() => setgame(init) , 500 );

        }
       
    })

  return (
    <div>
        <div className="apphead">
            <h3>Tic-Tac-Toe</h3>

            <div className="row ">
                <Squarebox state={game[0]} onClick={() => onsquareclick(0)}/>
                <Squarebox state={game[1]} onClick={() => onsquareclick(1)}/>
                <Squarebox state={game[2]} onClick={() => onsquareclick(2)}/>
            </div>

            <div className="row ">
               <Squarebox state={game[3]} onClick={() => onsquareclick(3)}/>
               <Squarebox state={game[4]} onClick={() => onsquareclick(4)}/>
               <Squarebox state={game[5]} onClick={() => onsquareclick(5)}/>
            </div>

            <div className="row">
             <Squarebox state={game[6]} onClick={() => onsquareclick(6)}/>
             <Squarebox state={game[7]} onClick={() => onsquareclick(7)}/>
             <Squarebox state={game[8]} onClick={() => onsquareclick(8)}/>
            </div>

            <button onClick={() => setgame(init)}>
             RESTART
            </button>
        </div>
    </div>
  )
}

export default Board
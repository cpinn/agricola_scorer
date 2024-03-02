import { useState } from 'react'
import './App.css'
import Players from './Players'
import Scoreboard from './Scoreboard'

function App() {
  const [game, setGame] = useState(false)
  const [players, setPlayers] = useState(0)

  const onPlayersChanged = (players: number) => {
    setPlayers(players + 1)
  }

  const startScoring = () => {
    
  }

  return (
    <>
      <h1>Agricola Scorer</h1>
      { !game &&
        <>
          <Players players={players} onPlayersChanged={onPlayersChanged} />
          <div className="card">
            <button disabled={players < 2} onClick={() => setGame((game) => {
                console.log(game);
              return game = true;
              })}>
              Start Scoring
            </button>
          </div>
        </>
      }
      { game &&
        <Scoreboard players={players}/>
      }
    </>
  )
}

export default App
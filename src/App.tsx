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

  const resetGameState = () => {
    setGame(false);
    setPlayers(0);
  }

  return (
    <>
      <h1>Agricola Scorer</h1>
      { !game &&
        <>
          <Players players={players} onPlayersChanged={onPlayersChanged} />
          <div className="card">
            <button disabled={players < 2} onClick={() => setGame((game) => game = true)}>
              Start Scoring
            </button>
          </div>
        </>
      }
      { game &&
        <>
          <Scoreboard players={players}/>
          <div className="card">
            <button onClick={() => resetGameState()}>
              Reset Game
            </button>
          </div>
        </>
      }
    </>
  )
}

export default App

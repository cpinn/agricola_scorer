import { useState } from 'react'
import './Scoreboard.css'
import PlayerScore from './PlayerScore'
import { AGRICOLA_SCORING } from './AgricolaScoring'

interface Scoreboard {
    players: number,
}

function Scoreboard({players} : Scoreboard) {
    const drawBoard = () => {
        let playerBoard = [];
        for (let i = 0; i < players; i++) {
            playerBoard.push(
                <PlayerScore playerNumber={i} key={i}/>
            );
        }
        return playerBoard;
      }

      const drawScoringFields = () => {
        let scoringFieldNames = [];
        let fieldNames = Object.values(AGRICOLA_SCORING);
        for (let i = 0; i < fieldNames.length; i++) {
            scoringFieldNames.push(
                <div key={fieldNames[i]?.name} >{fieldNames[i]?.name}</div>
            );
        }
        return scoringFieldNames;
      }

    const [board] = useState(drawBoard())
    const [scoringFields] = useState(drawScoringFields())


  return (
    <>
      <div>{players}</div>
      <div className="scoreboard">
        <div>Name</div>
        {scoringFields}
      </div>
      {board}

    </>
  )
}

export default Scoreboard
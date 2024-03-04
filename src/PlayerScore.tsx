import { useState, useEffect } from 'react'
import Score from './Score'
import { AGRICOLA_SCORING } from './AgricolaScoring'

interface PlayerScore {
    playerNumber: number,
}

const scoreKeys =  Object.keys(AGRICOLA_SCORING);

const getTallyIndex = () => {
  return new Array(scoreKeys.length).fill(0);
}

function PlayerScore({playerNumber} : PlayerScore) {
    
  const onUpdate = (value: number, index: number) => {
    const currentTallyIndex : number[] = tally_index;
    currentTallyIndex[index] = value;
    setTallyIndex(currentTallyIndex)
    const updatedSum = currentTallyIndex.reduce((partialSum, a) => partialSum + a, 0)
    setPlayerTally(updatedSum)
  }

  const drawBoardScores = () => {
    const keyName = scoreKeys;
    var indents = [];
    for (var i = 0; i < keyName.length; i++) {
      indents.push(
            <Score type={keyName[i]} key={i} index={i} onUpdate={onUpdate} />
        );
    }
    return indents;
  }

  const [board_types] = useState(drawBoardScores())
  const [tally_index, setTallyIndex] = useState<number[]>(getTallyIndex())
  const [player_tally, setPlayerTally] = useState<number>(0)

  return (
      <>
          <div className="scoreboard">
              <div>Player {playerNumber + 1} </div>
              {board_types}
              <div className="totalScore">{player_tally}</div>
          </div>
      </>
  )
}

export default PlayerScore



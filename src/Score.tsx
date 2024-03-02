import { useState } from 'react'
import { AGRICOLA_SCORING, SCORE_TYPE, POINT_CALCULATION } from './AgricolaScoring' 

interface Score {
    type: string,
    index: number,
    onUpdate: ((value: number, index: number) => void)
}

function Score({type, index, onUpdate} : Score) {
    
  const [rawPoints, setRawPoints] = useState(0)
  const [totalValue, setTotalValue] = useState(0)

  const fieldScore = (event: any) => {
    const scoringType: any = AGRICOLA_SCORING[type];
    let pointValue = event?.target.value;
    let totalPoints = 0;
    if (scoringType.type == SCORE_TYPE.MULTIPLIER) {
        totalPoints = pointValue * scoringType.point_multiplier
    } else if (scoringType.type == SCORE_TYPE.RANGE) {
        const multipliers = scoringType.point_multipliers;
        for (let i = multipliers.length - 1; i > 0; --i) {
            if (pointValue >= multipliers[i]) {
                totalPoints = POINT_CALCULATION[i]
                break;
            }
        }
    }

    setRawPoints(pointValue);
    setTotalValue(totalPoints);
    // Players Points for Category
    onUpdate(totalPoints, index);
  }

    return (
      <>
        <div>
            <input type="text" pattern="[0-9]*"
               onInput={(event) => fieldScore(event)} value={rawPoints} />
            
        </div>
      </>
    )
}

export default Score
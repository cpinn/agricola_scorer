import { useState } from 'react'

interface Score {
    type: string,
    index: number,
    onUpdate: ((value: number, index: number) => void)
}

enum SCORE_TYPE {
  RANGE,
  MULTIPLIER
}

const POINT_CALCULATION = [-1, 1, 2, 3, 4]

export const agricola_scores : any = {
  "fields" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 2, 3, 4, 5]
  },
  "pastures" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 2, 3, 4]
  },
  "grain" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 4, 6, 8]
  },
  "vegetables" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 2, 3, 4]
  },
  "sheep" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 4, 6, 8]
  },
  "wildboar" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 3, 5, 7]
  },
  "cattle" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 2, 4, 6]
  },
 "unusedSpaces" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": -1
  },
  "fencedSpaces" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1
  },
  "clay_hut_rooms" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1
  },
  "stoneHutRoom" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 2
  },
  "familyMember" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 3
  },
  "pointsForCars" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1
  },
  "bonusPoints" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1
  },
}

function Score({type, index, onUpdate} : Score) {
    
  const [rawPoints, setRawPoints] = useState(0)
  const [totalValue, setTotalValue] = useState(0)

  const fieldScore = (event: any) => {
    const scoringType: any = agricola_scores[type];
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
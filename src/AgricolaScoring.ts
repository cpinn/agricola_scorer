enum SCORE_TYPE {
  RANGE,
  MULTIPLIER
}

const POINT_CALCULATION = [-1, 1, 2, 3, 4]

const AGRICOLA_SCORING : any = {
  "fields" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 2, 3, 4, 5],
    "name": "Fields"
  },
  "pastures" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 2, 3, 4],
    "name": "Pastures"
  },
  "grain" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 4, 6, 8],
    "name": "Grain"
  },
  "vegetables" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 2, 3, 4],
    "name": "Vegetables"
  },
  "sheep" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 4, 6, 8],
    "name": "Sheep"
  },
  "wildboar" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 3, 5, 7],
    "name": "Wild Boar"
  },
  "cattle" : {
    "type": SCORE_TYPE.RANGE,
    "point_multipliers": [0, 1, 2, 4, 6],
    "name": "Cattle"
  },
 "unusedSpaces" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": -1,
    "name": "Unused Spaces"
  },
  "fencedSpaces" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1,
    "name": "Fenced Spaces"
  },
  "clay_hut_rooms" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1,
    "name": "Clay Hut Rooms"
  },
  "stoneHutRoom" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 2,
    "name": "Stone Hut Rooms"
  },
  "familyMember" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 3,
    "name": "Family Member"
  },
  "pointsForCards" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1,
    "name": "Points For Cards"
  },
  "bonusPoints" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": 1,
    "name": "Bonus Points"
  },
  "beggingCards" : {
    "type": SCORE_TYPE.MULTIPLIER,
    "point_multiplier": -3,
    "name": "Begging Cards"
  },
}

export {
  SCORE_TYPE,
  POINT_CALCULATION,
  AGRICOLA_SCORING
 }
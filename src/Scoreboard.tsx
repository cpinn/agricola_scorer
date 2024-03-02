import { useState } from 'react'
import './Scoreboard.css'
import PlayerScore from './PlayerScore'

interface Scoreboard {
    players: number,
}

function Scoreboard({players} : Scoreboard) {
    const drawBoard = () => {
        var indents = [];
        for (var i = 0; i < players; i++) {
          indents.push(
                <PlayerScore playerNumber={i} key={i}/>
            );
        }
        return indents;
      }

    const [board] = useState(drawBoard())



  return (
    <>
      <div>{players}</div>
      <div className="scoreboard">
        <div>Name</div>
        <div>Fields</div>
        <div>Pastures</div>
        <div>Grain</div>
        <div>Vegetables</div>
        <div>Sheep</div>
        <div>Wild Boar</div>
        <div>Cattle</div>
        <div>Unused Spaces</div>
        <div>Fenced Spaces</div>
        <div>Clay House Rooms</div>
        <div>Stone House Rooms</div>
        <div>Family Members</div>
        <div>Points For Cards</div>
        <div>Bonus Points</div>
      </div>
      {board}

    </>
  )
}

export default Scoreboard
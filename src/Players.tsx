import { useState } from 'react'

interface Players {
    players: number,
    onPlayersChanged: ((players: number) => void)
}

const tooManyPlayers = (players: number) => {
  return players > 7
}

function Players({players, onPlayersChanged}: Players) {

  return (
    <>
      <div>
        <h2>Number of Players is {players}</h2>
        <button disabled={tooManyPlayers(players)} onClick={() => onPlayersChanged(players)}>
          Add Players
        </button>
        { tooManyPlayers(players) && 
            <div>More than {players} players is not allowed.</div>
        }
      </div>
    </>
  )
}

export default Players

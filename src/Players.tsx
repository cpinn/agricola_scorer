import { useState } from 'react'

interface Players {
    players: number,
    onPlayersChanged: ((players: number) => void)
}

function Players({players, onPlayersChanged}: Players) {

  return (
    <>
      <div>
        <h2>Number of Players is {players}</h2>
        <button onClick={() => onPlayersChanged(players)}>
          Add Players
        </button>
      </div>
    </>
  )
}

export default Players

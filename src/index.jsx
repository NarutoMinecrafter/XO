import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { useEffect, useState } from 'react'

let game = {}
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const App = () => {

  const [player, setPlayer] = useState(true)
  const [end, setEnd] = useState(false)

  const editor = () => {
    setPlayer(!player)
  }

  const newGame = () => {
    setEnd(true)
    setPlayer(true)
  }

  useEffect(() => {
    setEnd(false)
  }, [end])

  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  if (end) return <div />
  else return <>
    <center className='App' >
      {arr.map((el) => <XO id={el} key={el} setEnd={setEnd} editor={() => editor()} setPlayer={setPlayer} player={player} ></XO>)}
    </center>
    <center>
      <button onClick={newGame} className='newGame' >Начать заново</button>
    </center>
  </>
}

const XO = ({ editor, player, id, setEnd, setPlayer }) => {
  const [value, setValue] = useState()

  const edit = () => {
    editor()
    setValue(player === true ? '✖' : '〇')
  }

  game[id] = value

  useEffect(() => {
    win.forEach(e => {
      if (game[e[0]] && game[e[1]] && game[e[2]] && game[e[0]] === game[e[1]] && game[e[1]] === game[e[2]]) {
        alert('Выиграл игрок ' + value)
        setPlayer(true)
        setEnd(true)
      }
    })
  }, [value])

  return <button className='xo' onClick={edit} disabled={value} >{value}</button>
}

ReactDOM.render( <App />, document.getElementById('root') )
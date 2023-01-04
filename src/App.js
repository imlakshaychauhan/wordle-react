import React, { createContext, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { defaultBoard } from './Words';

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, lettPos: 0});
  const correctWord = "RIGHT"
  const onSelectLetter = (keyVal) => {
    if(currAttempt.lettPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.lettPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, lettPos: currAttempt.lettPos + 1});
  }
  const onDelete = () => {
    if(currAttempt.lettPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.lettPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, lettPos: currAttempt.lettPos - 1});
  }
  const onEnter = () => {
    if(currAttempt.lettPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, lettPos: 0});
  }

  return (
    <div className="App">
      <nav> <h1>WORDLE</h1> </nav>
      <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onEnter, onDelete, correctWord}}>
        <div className='game' >
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
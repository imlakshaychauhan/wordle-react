import React, { createContext, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { defaultBoard } from './Words';

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(defaultBoard);
  return (
    <div className="App">
      <nav> <h1>WORDLE</h1> </nav>
      <AppContext.Provider value={{board, setBoard}}>
        <div className='game' >
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
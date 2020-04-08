import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';

import ColorContext from './context';
import ColorReducer from './color-reducer';

import MyLib from './components/saved-palettes/palette-list';
import Main from './components/main/main';
import History from './components/history/history';

import './App.css';

const App = () => {
  const initialState = useContext(ColorContext);
  const [state, dispatch] = useReducer(ColorReducer, initialState);

  const App = styled.div `
    height: 100vh;
    display: flex;
  `

  return (
    <ColorContext.Provider value={{state, dispatch}}>
      <App className="App">
        <MyLib />
        <Main />
        <History />
      </App>
    </ColorContext.Provider>
  );
}

export default App;

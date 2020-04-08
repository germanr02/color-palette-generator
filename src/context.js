import React from 'react'

const ColorContext = React.createContext({
    colorList: [ 
      // { 
      //   id: 0, 
      //   mainColor: "#333eee", 
      //   palette:[]
      // }
    ],
    savedPalettes: [
      // { 
      //   id: 0, 
      //   mainColor: "#333eee", 
      //   palette:[],
      //   isPaletteOpen: false
      // }
    ],
    currentIndex: 0,
    isMainPaletteOpen: false,
    firstLoad: true,
    forceNewColor: false
});

export default ColorContext
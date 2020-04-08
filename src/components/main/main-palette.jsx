import React, { useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import IconButton from '../icon-button'
import PaletteColor from '../palette-color'

import ColorContext from '../../context'

const PaletteWrapper = styled.div `
width: 80%;
height: 55px;
margin: 5% auto 5% auto;

display: flex;
align-items: center;
/* border: 1px solid black; */
`
const PaletteContainer = styled.div `
width: 100%;
height: 80%;

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

export default function MainPalette() {
    var { state, dispatch } = useContext(ColorContext)

    var colors = [];
    var mainColor = null
    
    try { 
        colors = state.colorList[state.currentIndex].palette;
        mainColor = state.colorList[state.currentIndex].mainColor;
    } 
    catch { colors = []; mainColor = null;}
    
    const open = state.isMainPaletteOpen

    const node = useRef();
    
    const OpenPalette = (
        <PaletteContainer ref={node}>
        {
            colors.map(color => (<PaletteColor key={color} color={color} />))
        }
        </PaletteContainer>
    )

    useEffect(() => {
        // hide palette on click
        document.addEventListener("mousedown", toggleClose);
        return () => {
            document.removeEventListener("mousedown", toggleClose);    
        };
    })

    const toggleClose = e => {
        // If click is on palette, then close
        if (node.current && node.current.contains(e.target))
        {
            // setOpen(false); 
            dispatch({
                type: "TOGGLE_MAIN_PALETTE",
                payload: {
                    ...state,
                    isMainPaletteOpen: false
                }
            })
        }
    }

    const toggleOpen = () => {
        // setOpen(true)
        dispatch({
            type: "TOGGLE_MAIN_PALETTE",
            payload: {
                ...state,
                isMainPaletteOpen: true
            }
        })
    }

    const savePalette = () => {
        const newPalette = state.colorList[state.currentIndex];
        const paletteExists = state.savedPalettes.find(p => (p.id === newPalette.id));
        if (paletteExists)
        {   // create a css animation to highlight palette in saved list
            alert(`Palette with ${newPalette.mainColor} as main color is already in the list.`)
        } else 
        {
            
            const palette = { 
                ...newPalette, 
                isPaletteOpen: false
            }
            
            const savedPalettes = [...state.savedPalettes, palette]
            
            // Force new color is used as a flag to trigger randomizeColor() from the
            // main/main-selection-buttons component.
            dispatch({
                type: "SAVE_PALETTE",
                payload: {
                    ...state,
                    savedPalettes,
                    forceNewColor: true
                }
            });
        }

        
    }
    
    return (
        <PaletteWrapper>
         {
            open ? (OpenPalette) : (
                <PaletteContainer>
                    <IconButton
                        className="fas fa-angle-right"
                        action={toggleOpen}
                    />
                    <p>{mainColor}</p>
                    <IconButton 
                        className="fas fa-plus-circle" 
                        action={savePalette}
                    />
                </PaletteContainer>
            )
         }
        </PaletteWrapper>
    )
}

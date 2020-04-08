import React, { useContext } from 'react'
import styled from 'styled-components'

import PaletteColor from '../palette-color'
import IconButton from '../icon-button'

import ColorContext from '../../context'

const PaletteWrapper = styled.div `
min-height: 54px;
min-width: 97%; /* 220px */
max-height: 7vh;
/* max-width: 80%; */
/* border: 1px solid blue; */
border-radius: 15px;
margin-bottom: 0.5vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
`

const PaletteContainer = styled.div `
height: 90%;
width: 98%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
/* border-top: 1px solid rgba(0, 0, 0, 0.2); */
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 10px;
/* background-color: white; */
`

export default function PaletteSample(props) {

    var { state, dispatch } = useContext(ColorContext)
    
    const color = props.details.mainColor;
    const palette = props.details.palette;
    const open = props.details.isPaletteOpen

    const togglePalette = () => {
        // Dispatch toggle
        var savedPalettes = [...state.savedPalettes].map(p => {
            if (p.id === props.details.id) {
               p.isPaletteOpen = !p.isPaletteOpen 
            }
            return p
        })

        dispatch({
            type: "UPDATE_PALETTE_LIST",
            payload: {
                ...state,
                savedPalettes
            }
        })
    }

    const removePalette = () => {
        var savedPalettes = [...state.savedPalettes].filter(p => (p.id !== props.details.id))

        dispatch({
            type: "UPDATE_PALETTE_LIST",
            payload: {
                ...state,
                savedPalettes
            }
        })
    }

    const OpenPalette = (
        <PaletteContainer>
            {
                palette.map(pColor => (<PaletteColor key={pColor} color = {pColor}/>))
            }
            <IconButton className="fas fa-angle-left" fontSize="23px" action={togglePalette} />
        </PaletteContainer>
    )
    const ClosedPalette = (
        <PaletteContainer>
            <PaletteColor color={color}/>
            <p style={{ fontSize:"15px" }}>{color}</p>
            <span style={{
                // border:"1px solid blue", 
                width:"21%", 
                display:"flex", 
                justifyContent:"space-between", 
                alignItems:"center", 
                marginRight:"5px"
            }}>
                <IconButton className="far fa-trash-alt" action={removePalette} fontSize="16px" color="#ee1169"/>
                <IconButton className="fas fa-angle-right" fontSize="21px" action={togglePalette} />
            </span>
        </PaletteContainer>
    )

    return (
        <PaletteWrapper>
            {open ? (OpenPalette) : (ClosedPalette)}
        </PaletteWrapper>
    )
}

import React, { useContext } from 'react'
import styled from 'styled-components'

import ColorContext from '../../context'

const ColorDiv = styled.div `
    height: 300px;
    width: 300px;
    background-color: ${props => props.color};
    border: 3px solid ${ props => {
        var rgba;
        const darken = (hue) => {
            if (hue < 0) { hue = 0 }
            return hue
        }
        if (props.color)
        {
            const r = darken(parseInt(props.color.substring(1, 3), 16) - 20);
            const g = darken(parseInt(props.color.substring(3, 5), 16) - 20);
            const b = darken(parseInt(props.color.substring(5, 7), 16) - 20);
            rgba = `rgba(${r}, ${g}, ${b}, 0.2)`;
        }
        else { rgba = `white`}
        return rgba;
    }};
    border-radius: 25%;
    display: inline-block;
`

export default function MainColor () {

    var { state } = useContext(ColorContext)
    
    // The randomizeColor() function in ./main-selector.jsx is automatically executed 
    // the first time the component loads to initialize the first color. Once that
    // executes, we have a color to pass to our components, hence the follwing try/catch.

    var color;
    try { color = state.colorList[state.currentIndex].mainColor } 
    catch { color = null }

    return (
        <ColorDiv color = {color}/>
    )
}
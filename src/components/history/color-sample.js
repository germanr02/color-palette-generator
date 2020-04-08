import React from 'react'
import styled from 'styled-components'

function ColorSample(props) {
    
    const ColorSample = styled.div `
        width: 3vw;
        height: 3vw;
        margin: 3px;
        align-self: center;
        background-color: ${props.color};
        border-radius: 25%;
        transition: transform 0.12s ease;
        &:hover {
            cursor: pointer;
            transform: scale(1.10);
        }
    `

    return (
        <ColorSample/>
    )
}

export default ColorSample
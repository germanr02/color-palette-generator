import React from 'react'
import styled from 'styled-components'

function PaletteColor(props) {
    const PaletteSample = styled.div `
    height: 40px;
    width: 40px;
    margin: 0.5%;
    background-color: ${props.color};
    border: 1.5px solid ${ () => {
        const darken = (hue) => {
            if (hue < 0) { hue = 0 }
            return hue
        }
        const r = darken(parseInt(props.color.substring(1, 3), 16) - 20);
        const g = darken(parseInt(props.color.substring(3, 5), 16) - 20);
        const b = darken(parseInt(props.color.substring(5, 7), 16) - 20);
        const rgba = `rgba(${r}, ${g}, ${b}, 0.2)`;
        return rgba;
    }};
    border-radius: 12px;
    transform: translateZ(0);
    transition: transform 0.12s ease;
    &:hover{
        cursor: pointer;
        transform: scale(1.08);
        /* background-color: cadetblue; */
    }
    `
    return (
        <PaletteSample/>
    )
}

export default PaletteColor

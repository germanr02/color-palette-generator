import React from 'react';
import styled from 'styled-components';

import MainColor from './main-color';
import MainPalette from './main-palette';
import MainSelector from './main-selection-buttons';


const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding: 2%;
    text-align: center;
    /* border: 2px solid blue; */
`

export default function MainSection() {
    return (
        <FlexWrapper >
            <h2 style={{ fontSize:"38px"}} className="title">Main Color</h2>
            <MainColor /> 
            <MainPalette />
            <MainSelector />
        </FlexWrapper>
    )
}



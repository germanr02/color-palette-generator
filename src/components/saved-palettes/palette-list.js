import React, { useContext } from 'react'
import styled from 'styled-components'

import PaletteSample from './palette-sample'
import ColorContext from '../../context'

const Wrapper = styled.div `
    padding: 2vh 0 7vh 0;
    width: 20%;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    /* border: 1px solid black; */
`
const ListContainer = styled.div `
    padding: 2vh 0 2vh 0;
    min-width: 80%;
    min-height: 20%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    /* background-color: lavender; */
    `

export default function MyLib() {
    const { state } = useContext(ColorContext)

    var savedPalettes;
    try { savedPalettes = state.savedPalettes }
    catch (error) { console.log(error) }
    
    return (
        <Wrapper>
            <h2 className="title">Saved List</h2>
            <ListContainer >
                {
                    savedPalettes && savedPalettes.map(p => {
                        return (
                            <PaletteSample 
                                key={p.id}
                                details={p} 
                            />
                        )
                    })
                }
            </ListContainer>
        </Wrapper>
    )
}

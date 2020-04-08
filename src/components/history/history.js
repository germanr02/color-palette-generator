import React, { useContext } from "react";
import styled from "styled-components";

// import ColorSample from './color-sample'

import ColorContext from "../../context";

const Wrapper = styled.div`
  padding: 2vh 0 7vh 0;
  min-width: 20%;
  /* border-left: 1px solid orange; */
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  width: 35%;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid purple; */
`;

const Column = styled.div`
  min-height: 26%;
  /* margin-right: 0.5vw; */
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow-y: auto;
`;
const ColorSample = styled.div`
  min-width: 35px;
  min-height: 35px;
  max-width: 2.4vw;
  max-height: 2.4vw;
  margin: 3px;
  align-self: center;
  background-color: ${(props) => props.color};
  border-radius: 25%;
  transition: transform 0.12s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default function History() {
  const { state, dispatch } = useContext(ColorContext);
  const colors = state.colorList;

  const selectColor = (index) => {
    // Update currentIndex prop in context to udpate state.
    dispatch({
      type: "CHANGE_INDEX",
      payload: {
        ...state,
        currentIndex: index,
      },
    });
  };

  return (
    <Wrapper>
      <Container>
        <h2 className="title">History</h2>
        <Column>
          {colors.map((c) => {
            const index = colors.indexOf(c);
            return (
              <ColorSample
                key={c.id}
                color={c.mainColor}
                onClick={() => selectColor(index)}
              />
            );
          })}
        </Column>
      </Container>
    </Wrapper>
  );
}

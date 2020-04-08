import React, { useEffect, useContext, useCallback } from "react";
import styled from "styled-components";
import uuidv4 from "uuid/v4";
import fetch from "node-fetch";

import ColorContext from "../../context";
import IconButton from "../icon-button";

const ButtonsWrapper = styled.span`
  width: 100%;
  display: "block";
  font-size: "32px";
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const RandomizeButton = styled.button`
  font-size: 18px;
  border-radius: 25px;
  padding: 15px;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

function MainSelector() {
  const { state, dispatch } = useContext(ColorContext);

  // Use callback is used in order to call the randomizeColor function when
  // a state change triggers it, but to prevent it from continuously getting
  // called in useEffect as a result.
  const randomizeColor = useCallback(async () => {
    // Generate random color
    var mainColor = "#" + Math.random().toString(16).slice(2, 8);
    var r = parseInt(mainColor.substring(1, 3), 16);
    var g = parseInt(mainColor.substring(3, 5), 16);
    var b = parseInt(mainColor.substring(5, 7), 16);

    // useAPI to get palette based on main color
    const paletteResult = await fetchPalette(r, g, b);
    const palette = rgbArrayToHexArray(paletteResult.result);
    mainColor = palette[0]; // colormind api slightly changes the input value

    // This should be the standard state when generating a new color
    const newColor = {
      id: uuidv4(),
      mainColor,
      palette,
    };
    // Update color list
    const colorList = [...state.colorList, newColor];
    // Update current index location
    const currentIndex = colorList.length - 1;
    dispatch({
      type: "NEW_COLOR",
      payload: {
        ...state,
        colorList,
        currentIndex,
        firstLoad: false,
        forceNewColor: false,
      },
    });
  }, [state, dispatch]);

  useEffect(() => {
    state.firstLoad && randomizeColor();
    state.forceNewColor && randomizeColor();
    return () => {};
  }, [state.firstLoad, state.forceNewColor, randomizeColor]);

  const fetchPalette = async (r, g, b) => {
    var url = "http://colormind.io/api/";
    var data = {
      model: "default",
      input: [[r, g, b], "N", "N", "N", "N"],
    };

    const response = await fetch(url, {
      method: "POST",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json();
  };

  const rgbArrayToHexArray = (arr) => {
    var hexArr = []
    arr.forEach(rgb => {
      var hex = "#";
      rgb.forEach(hue => {
        var tmp = hex + hue.toString(16);
        
        if(tmp.length % 2 === 0) { 
          // console.log(hue, hex, hex.length);
          tmp = hex + "0" + hue.toString(16);
          // console.log("new:", tmp);
        }

        hex = tmp;

      });
      hexArr.push(hex)
    });

    return hexArr;
  };

  // const fetchList = async () => {
  //   var url = "http://colormind.io/list/";
  //   const response = await fetch(url);
  //   return response.json();
  // };

  const nextColor = () => {
    const currentIndex = state.currentIndex + 1;

    dispatch({
      type: "CHANGE_INDEX",
      payload: {
        ...state,
        currentIndex,
      },
    });
  };

  const prevColor = () => {
    const currentIndex = state.currentIndex - 1;
    dispatch({
      type: "CHANGE_INDEX",
      payload: {
        ...state,
        currentIndex,
      },
    });
  };

  const nextCheck = () => {
    if (state.currentIndex === state.colorList.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  const prevCheck = () => {
    if (state.currentIndex === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ButtonsWrapper>
      <IconButton
        className="fas fa-arrow-left"
        action={prevColor}
        disabled={prevCheck()}
      />
      <RandomizeButton onClick={randomizeColor}>Random Color</RandomizeButton>
      <IconButton
        className="fas fa-arrow-right"
        action={nextColor}
        disabled={nextCheck()}
      />
    </ButtonsWrapper>
  );
}

export default MainSelector;

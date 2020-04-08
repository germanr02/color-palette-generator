import React, { Component } from 'react'
import styled from 'styled-components'

export class IconButton extends Component {
    render() {
        const Wrapper = styled.button `
            background: none;
            border: none;
            outline: none;
            text-align: center;
            margin: 2%;
            padding: 0!important;
            display: flex;
            align-items: center;
            transition: transform 0.12s ease;
            height: 100%;
            &:hover {
                cursor: pointer;
                transform: scale(1.20);
            }
        `
        const Icon = styled.i `
            font-size: ${this.props.fontSize || "28px"};
            height: 100%;
            color: ${this.props.color};
            /* border: 1px solid black; */
            `
            
        return (
            <Wrapper onClick={this.props.action} disabled={this.props.disabled}>
                <Icon className={this.props.className}/>
            </Wrapper>
        )
    }
}

export default IconButton

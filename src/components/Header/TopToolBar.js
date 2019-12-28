import React from 'react'
import { useTheme } from "@material-ui/core/styles"
import styled from 'styled-components'

const StyledDiv = styled.div`
position: fixed;
top:0;
width: 100vw;
height: 20px;
background-color: ${props => props.color};
color: white
`

const TopToolBar = (props) => {
    return (
        <StyledDiv color={useTheme().palette.primary.dark}>
            toolbar here
        </StyledDiv>

    )
}

export default TopToolBar

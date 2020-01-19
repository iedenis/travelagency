import React from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'

const Order = () => {
    const Wrapper = styled(Paper)`
    max-width: 490px;
    height: 200px;
    `
    return (
        <Wrapper>
            Order here
        </Wrapper>
    )
}

export default Order

import React from 'react'
import { CardActions, Button, Typography, CardActionArea, CardMedia, CardContent, Card } from '@material-ui/core'
import styled from 'styled-components'
const PlaceCard = ({ image, name, description }) => {
    const DestinationCard = styled(Card)`
    margin: 3px; 
    /* &.MuiCard-root{
        margin-bottom: 3px;
    } */
    `
    
    const StyledCardActions = styled(CardActions)`
    &.MuiCardActions-root{
        justify-content: center;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    `
    const DestinationImage = styled(CardMedia)`
    &.MuiCardMedia-root{
        max-height: 239px;
    }
    /* width: 100%;
height:100%; */
    `

    return (
        <DestinationCard style={{ height: '500px' }}>
            <CardActionArea>
                <DestinationImage
                    // style={{ maxHeight: '239px', maxWidth: '390px' }}
                    component='img'
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography color='primary' align="center" gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <StyledCardActions >
                <Button size="small" color="secondary" variant='outlined'>
                    Learn More about {name}
                </Button>
            </StyledCardActions>
        </DestinationCard>
    )
}

export default PlaceCard

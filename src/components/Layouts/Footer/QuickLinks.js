import React from 'react'
import { Typography, List, ListItem, Grid, Divider, Container } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledLink = styled(Link)`

    text-decoration: none;
        color: 'yellow';
     opacity: 0.7;
:hover{
    background-color: "white"
}
`
const LinkColor = styled.span`
color: #fafafa;
`
const StyledDivider = styled(Divider)`
&.MuiDivider-root{
    background-color:rgba(255, 255, 255, 0.2);
}
`
const StyledAnchor = styled.a`
color: #fafafa;
opacity: 0.7;
text-decoration: none;
`

const QuickLinks = () => {

    return (
        <Container>

            <Grid container alignContent='flex-start'>
                <Grid item style={{ padding: '16px' }}>

                    <Typography variant='body1' >
                        <Typography style={{ color: '#fafafa', opacity: 0.7 }} >Help links</Typography>
                        <StyledDivider />
                        <List dense>
                            <ListItem ><StyledLink to='/about'><LinkColor style={{ color: 'white' }}>About</LinkColor></StyledLink></ListItem>
                            <ListItem><StyledLink to='/contact'><LinkColor>Contact</LinkColor></StyledLink></ListItem>

                        </List>
                    </Typography>
                </Grid>
                <Grid item style={{ padding: '16px' }} >
                    <Typography style={{ color: '#fafafa', opacity: 0.7 }} >Car Rental Companies</Typography>
                    <StyledDivider />
                    <Grid container>
                        <Grid item>

                            <List dense>
                                <ListItem ><StyledAnchor href='https://www.avis.com'>Avis</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='https://www.budget.com'>Budget</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='https://www.alamo.com'>Alamo</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='https://www.europcar.com'>Europcar</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='https://www.hertz.com'>Hertz</StyledAnchor></ListItem>

                            </List>
                        </Grid>
                        <Grid item>

                            <List dense>
                                <ListItem ><StyledAnchor href='https://www.thrifty.com'>Thrifty</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='https://www.dollar.com'>Dollar</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='https://www.enterprise.com'>Enterprise</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='https://www.sixt.com'>Sixt</StyledAnchor></ListItem>
                            </List>
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item style={{ padding: '16px' }}>

                    <Typography variant='body1' >
                        <Typography style={{ color: '#fafafa', opacity: 0.7 }} >Popular destinations</Typography>
                        <StyledDivider />
                        <List dense>
                            <ListItem ><StyledLink to='/countries/germany'><LinkColor style={{ color: 'white' }}>Germany</LinkColor></StyledLink></ListItem>
                            <ListItem><StyledLink to='/countries/italy'><LinkColor>Italy</LinkColor></StyledLink></ListItem>

                        </List>
                    </Typography>
                </Grid>
            </Grid>
        </Container>

    )
}

export default QuickLinks

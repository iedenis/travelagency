import React from 'react'
import { Typography, List, ListItem, Grid, Divider, Container } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledLink = styled(Link)`
    text-decoration: none;
        color: 'yellow';
     opacity: 0.7;

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

                        <Typography style={{ color: '#fafafa', opacity: 0.7, textAlign: 'center' }} >Help links</Typography>
                        <StyledDivider />
                        <List dense>
                            <ListItem ><StyledLink to='/about'><LinkColor style={{ color: 'white' }}>About</LinkColor></StyledLink></ListItem>
                            <ListItem><StyledLink to='/contact'><LinkColor>Contact</LinkColor></StyledLink></ListItem>

                        </List>
                </Grid>
                <Grid item style={{ padding: '16px' }} >
                    <Typography style={{ color: '#fafafa', opacity: 0.7, textAlign:'center' }} >Car Rental Companies</Typography>
                    <StyledDivider />
                    <Grid container>
                        <Grid item>

                            <List dense>
                                <ListItem ><StyledAnchor href='#'>Avis</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='#'>Budget</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='#'>Alamo</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='#'>Europcar</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='#'>Hertz</StyledAnchor></ListItem>

                            </List>
                        </Grid>
                        <Grid item>

                            <List dense>
                                <ListItem ><StyledAnchor href='#'>Thrifty</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='#'>Dollar</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='#'>Enterprise</StyledAnchor></ListItem>
                                <ListItem ><StyledAnchor href='#'>Sixt</StyledAnchor></ListItem>
                            </List>
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item style={{ padding: '16px' }}>

                        <Typography style={{ color: '#fafafa', opacity: 0.7, textAlign: 'center' }} >Popular destinations</Typography>
                        <StyledDivider />
                        <List dense>
                            <ListItem ><StyledLink to='/countries/germany'><LinkColor style={{ color: 'white' }}>Germany</LinkColor></StyledLink></ListItem>
                            <ListItem><StyledLink to='/countries/italy'><LinkColor>Italy</LinkColor></StyledLink></ListItem>

                        </List>
                </Grid>
            </Grid>
        </Container>

    )
}

export default QuickLinks

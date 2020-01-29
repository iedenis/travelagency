import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import avisLogo from '../../../../images/suppliers/avis.gif'
import alamoLogo from '../../../../images/suppliers/alamo.gif'
import budgetLogo from '../../../../images/suppliers/budget.gif'
import dollarLogo from '../../../../images/suppliers/dollar.gif'
import enterpriseLogo from '../../../../images/suppliers/enterprise.gif'
import europcarLogo from '../../../../images/suppliers/europcar.gif'
import herzLogo from '../../../../images/suppliers/hertz.gif'
import thriftyLogo from '../../../../images/suppliers/thrifty.gif'
import styled from 'styled-components'

const companiesLogo = [
    avisLogo, alamoLogo, budgetLogo, dollarLogo, enterpriseLogo, europcarLogo, herzLogo, thriftyLogo
]
const Logo = styled(Grid)`
padding: 10px;
border: 1px solid #cccccc;
border-radius: 4px;
margin-right: 2px;
&.MuiGrid-item{
    margin-right: 1rem;
    margin-bottom: 0.4rem;

}

`

const Companies = () => {
    return (
        <React.Fragment>
            <Hidden xsDown>
                <Grid container style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {companiesLogo.map(logo => {
                        return <Logo item key={logo}><img src={logo} alt={logo}></img></Logo>
                    })}
                    <Grid item style={{ width: '137px' }}></Grid>
                </Grid>
            </Hidden>

        </React.Fragment>

    )
}

export default Companies

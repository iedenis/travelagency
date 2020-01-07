import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles'
import Main from './components/Content/Main/Main';
import { Container, Grid, Hidden } from '@material-ui/core';
//import SideDrawer from './components/Header/LeftDrawer'
import Footer from './components/Footer/Footer';
import About from './components/Routes/About/About';
import styled from 'styled-components'
import MainSection from './Layouts/MainSection';
import background from './images/background.png'

const App = () => {
  const StyledContainer = styled(Container)`
  background-image:url(${background});
  @media screen and (max-width: ${useTheme().breakpoints.values.sm}px) {
    &.MuiContainer-root{
     padding:0px;
     background-image: none;
   }
}
`
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/** <SideDrawer />*/}
        <StyledContainer maxWidth="lg"  >
          <MainSection >
            <Switch>
              <Route exact path='/' component={Main}></Route>
              <Route exact path='/about' component={About} />
            </Switch>
          </MainSection>
        </StyledContainer>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

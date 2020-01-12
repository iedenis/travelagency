import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SecondSection from './components/Content/SecondSection/SecondSection'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles'
import Main from './components/Content/Main/Main';
import { Container } from '@material-ui/core';
//import SideDrawer from './components/Header/LeftDrawer'
import Footer from './components/Footer/Footer';
import About from './components/Routes/About/About';
import styled from 'styled-components'
import MainSection from './components/Layouts/MainSection';
import background from './images/background.png'
import ContactSection from './components/Content/ContactSection/ContactSection';

const App = () => {
  const StyledContainer = styled(Container)`
  background-size:cover;
  background-repeat: no-repeat;
  @media screen and (max-width: ${useTheme().breakpoints.values.sm}px) {
    &.MuiContainer-root{
     padding:0px;
     background-image: none;
   }
}
`
  const ParallaxBack = styled.div`
@media screen and (min-width: 600px) {
  background-image: url(${background});
  background-size: cover;
}
`
  return (
    <div className="App">

      <BrowserRouter>

        {/*Parallax*/}
        {/* <div className='back' style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          // transform: 'translateZ(-1px) scale(2)',
          // WebkitTransform: 'translateZ(-1px) scale(2)',
          // MozTransform:'translateZ(0)'
        }}> */}
        <ParallaxBack>


          <Header />

          <MainSection >

            <Switch>
              <Route exact path='/' component={Main}></Route>
              <Route exact path='/about' component={About} />
            </Switch>

          </MainSection>
          {/* </div> */}
        </ParallaxBack>
        <ContactSection />
        <SecondSection />

      </BrowserRouter>


      {/* </div> */}

      <Footer />

    </div>
  );


}

export default App;

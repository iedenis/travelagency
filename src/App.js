import React from 'react';
import './App.css';
import Header from './components/Layouts/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Routes/Home/MainSection/Main';
import Footer from './components/Layouts/Footer/Footer';
import About from './components/Routes/About/About';
import styled from 'styled-components'
import background from './images/background.png'
import Contact from './components/Routes/Contact/Contact'
import Blog from './components/Routes/Blog/Blog';
import SearchResults from './components/Routes/SearchResults/SearchResults'
import BackToTopButton from './components/Layouts/BackToTopButton/BackToTopButton';
import SignIn from './components/Routes/SignIn/SignIn';
const App = () => {
  //   const StyledContainer = styled(Container)`
  //   background-size:cover;
  //   background-repeat: no-repeat;
  //   @media screen and (max-width: ${useTheme().breakpoints.values.sm}px) {
  //     &.MuiContainer-root{
  //      padding:0px;
  //      background-image: none;
  //      background-color: rgb(250, 250, 250);
  //    }
  // }
  // `
  const ParallaxBack = styled.div`
@media screen and (min-width: 600px) {
  /* background-image: url(${background}); */
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
        {/* <ParallaxBack> */}
        <Header />
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/results' component={SearchResults} />
          <Route exact path='/sign-in' component={SignIn}/>
        </Switch>
        {/* </ParallaxBack> */}
        <BackToTopButton />
      </BrowserRouter>


      {/* </div> */}

      <Footer />

    </div>
  );


}

export default App;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles'
import Main from './components/Content/Main/Main';
import { Container } from '@material-ui/core';
//import SideDrawer from './components/Header/LeftDrawer'
import Footer from './components/Footer/Footer';
import About from './components/Content/About/About';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       {/** <SideDrawer />*/} 
        <Container maxWidth='lg' style={{ height: '100vh', marginTop: '84px', border: '1px solid' }}>

          <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route exact path='/about' component={About} />
          </Switch>
        </Container>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

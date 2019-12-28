import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles'
import Main from './components/Main/Main';
import { Container } from '@material-ui/core';
import SideDrawer from './components/Drawer/Drawer'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/*<SideDrawer />*/}
        <Container style={{ height: '100%', marginTop: '60px', border: '1px solid' }}>

          <Switch>
            <Route exact path='/' component={Main}></Route>
          </Switch>
        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;

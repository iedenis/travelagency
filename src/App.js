import './App.css';
import React, { useState } from 'react';
import Header from './components/Layouts/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Routes/Home/MainSection/Main';
import Footer from './components/Layouts/Footer/Footer';
import About from './components/Routes/About/About';
import Contact from './components/Routes/Contact/Contact'
import Blog from './components/Routes/Blog/Blog';
import BackToTopButton from './components/Layouts/BackToTopButton/BackToTopButton';
import SignIn from './components/Routes/SignIn/SignIn';
import Order from './components/Routes/SearchResults/Order';
import PageNotFound from './components/Routes/404/PageNotFound';
import { CurrencyContext } from './components/SharedState/SharedState'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {

  const [currency, setCurrency] = useState({
    code: 'EUR',
    sign: '€',
    icon: <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faEuroSign} />
  })
  return (
    <div className="App">

      <BrowserRouter>

        <CurrencyContext.Provider value={[currency.icon, setCurrency]}>
          <Header />
        </CurrencyContext.Provider>
        <Switch>
          <Route exact path='/'><Main /></Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/results'>
            <CurrencyContext.Provider value={[currency.sign, setCurrency]}>
              <Order />
            </CurrencyContext.Provider>
          </Route>
          <Route exact path='/sign-in' component={SignIn} />
          <Route component={PageNotFound} />
        </Switch>
        <BackToTopButton />
        <Footer />

      </BrowserRouter>


    </div >
  );


}

export default App;

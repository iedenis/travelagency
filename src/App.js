import './App.css';
import React, { useState, createContext } from 'react';
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
export const SearchDetailsContext = createContext()

const date = new Date();
const defaultTime = date.setHours(10, 0, 0)
const App = () => {



  const [searchDetails, setSearchDetails] = useState({
    pickUpLocation: '',
    dropOffLocation: '',
    pickUpDate: new Date(),
    pickUpTime: defaultTime,
    dropOffDate: date.setDate(date.getDate() + 3),
    dropOffTime: defaultTime,
    driverAge: ''
  })
  const [driverAge, setDriverAge] = useState(0);

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
          <Route exact path='/'>
            <SearchDetailsContext.Provider value={[searchDetails, setSearchDetails]} >
              <Main setDriverAge={setDriverAge} />
            </SearchDetailsContext.Provider>

          </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/blog' component={Blog} />

          <Route exact path='/results'>
            <CurrencyContext.Provider value={[currency.sign, setCurrency]}>
              <SearchDetailsContext.Provider value={[searchDetails, setSearchDetails]}>
                <Order driverAge={driverAge} />
              </SearchDetailsContext.Provider>

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

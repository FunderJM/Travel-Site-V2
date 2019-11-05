import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SplashPageComp } from './components/splash page/splashpage.component';
import { HomeComp } from './components/main page components/booking.component';
import { NavbarComp } from './components/nav components/navbar.components';
import { EmployementComp } from './components/employment/employment.component';
import { CartComp } from './components/cart/cart.component';
import { LegalComp } from './components/legal contact/legal.component';
import { FrequentFlyerComp } from './components/frequent flyer/freqflyer.component';
import { ThankComp } from './components/cart/thanks.component';
// import { SocialLinksComp } from './components/social links/social.component';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <div id="main-content-container">
              <Switch>
                <Route path='/booking' component={HomeComp} />
                <Route path='/employement_application' component={EmployementComp} />
                <Route path='/cart' component={CartComp} />
                <Route path='/frequent_flyer' component={FrequentFlyerComp} />
                <Route path='/thank_you' component={ThankComp} />
                <Route component={SplashPageComp} />
              </Switch>
        </div>
        <LegalComp />
      </BrowserRouter>
      {/* <SocialLinksComp /> */}
    </div>
  );
}

export default App;

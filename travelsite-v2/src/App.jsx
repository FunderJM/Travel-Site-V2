import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SplashPageComp } from './components/splash page/splashpage.component';
import { HomeComp } from './components/main page components/home.component';
import { NavbarComp } from './components/nav components/navbar.components';
import { EmployementComp } from './components/forms/employment.component';
// import { SocialLinksComp } from './components/social links/social.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <div id="main-content-container">
              <Switch>
                <Route path='/home' component={HomeComp} />
                <Route path='/employement_application' component={EmployementComp} />
                <Route component={SplashPageComp} />
              </Switch>
        </div>
      </BrowserRouter>
      {/* <SocialLinksComp /> */}
    </div>
  );
}

export default App;

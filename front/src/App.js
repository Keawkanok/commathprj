import React from 'react';
import logo from './logo.svg';
import Main from './views/main';
import Page1 from './views/page1';
import Page2 from './views/page2';
import Page3 from './views/page3';
import Page4 from './views/page4';
import Page5 from './views/page5';
import Page6 from './views/page6';

import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      
    <Route path="/commathprj/main">
      <Main>

      </Main>
    </Route> 

    <Route path="/commathprj/page1">
      <Page1>

      </Page1>
    </Route>

    <Route path="/commathprj/page2">
      <Page2>

      </Page2>
    </Route> 

    <Route path="/commathprj/page3">
      <Page3>

      </Page3>
    </Route> 
    <Route path="/commathprj/page4">
      <Page4>

      </Page4>
    </Route> 
    <Route path="/commathprj/page5">
      <Page5>

      </Page5>
    </Route> 

    <Route path="/commathprj/page6">
      <Page6>

      </Page6>
    </Route> 
    </Switch>
    </BrowserRouter>
  );
}

export default App;

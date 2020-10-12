import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from './views/page1';
import Page2 from './views/page2';
import Page3 from './views/page3';
import Page4 from './views/page4';
import Page5 from './views/page5';
import Page6 from './views/page6';

function App() {
  return (
    <div>
    <h1>Com Math</h1>
    <div>
        <ul>
            <li><a href="/page1">บทที่ 1</a></li>
            <li><a href="/page2">บทที่ 2</a></li>
            <li><a href="/page3">บทที่ 3</a></li>
            <li><a href="/page4">บทที่ 4</a></li>
            <li><a href="/page5">บทที่ 5</a></li>
            <li><a href="/page6">บทที่ 6</a></li>
        </ul>
    </div>
</div>
  );
}

export default App;

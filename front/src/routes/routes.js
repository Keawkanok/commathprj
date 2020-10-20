import React from "react";
import Main from '../views/main';
import Page1 from '../views/page1';
import Page2 from '../views/page2';
import Page3 from '../views/page3';
import Page4 from '../views/page4';
import Page5 from '../views/page5';
import Page6 from '../views/page6';


const routes = [
    { path: "/", element: <Main />, },
    { path: "commathprj", element: <Main />, },
    { path: "page1", element: <Page1 />, },
    { path: "page2", element: <Page2 />, },
    { path: "page3", element: <Page3 />, },
    { path: "page4", element: <Page4 />, },
    { path: "page5", element: <Page5 />, },
    { path: "page6", element: <Page6 />, },
  ];
  
export default routes;
import './App.css';

import React from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =()=> {

    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar/>

        <Switch>


        <Route exact path="/">
        {/* <Route exact path={process.env.PUBLIC_URL + '/'}> */}
            <News key="general" pagesize={9} contenttype="general"/>
        </Route>
        <Route exact path="/business">
            <News key="business" pagesize={9} contenttype="business"/>
        </Route>
        <Route exact path="/entertainment">
            <News key="entertainment" pagesize={9} contenttype="entertainment"/>
        </Route>
        <Route exact path="/science">
            <News key="science" pagesize={9} contenttype="science"/>
        </Route>
        <Route exact path="/sports">
            <News key="sports" pagesize={9} contenttype="sports"/>
        </Route>
        <Route exact path="/technology">
            <News key="technology" pagesize={9} contenttype="technology"/>
        </Route>



        </Switch>



      </div>
      </Router>
    )
  
}

export default App
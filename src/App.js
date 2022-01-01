// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Switch,Route  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  // pageSize = 20
  const apiKey = process.env.REACT_APP_NEWS_API
  const [Progress, setProgress] = useState(0)

  // state = {
  //   progress:0
  // }
  // setProgress = (progress)=>{
  //   setState({progress:progress})
  // }

  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        Progress={Progress}
        
      />
        {/* <News setProgress={setProgress} apiKey={apiKey}} pageSize={6} category="sports"/> */}
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} category="general"/></Route>          
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} category="business"/></Route>          
          <Route exact path="/entertainment"><News setProgress={setProgress}apiKey={apiKey}  key="entertainment" pageSize={6} category="entertainment"/></Route>          
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} category="sports"/></Route>          
          <Route exact path="/health"><News setProgress={setProgress}apiKey={apiKey}  key="health" pageSize={6} category="health"/></Route>          
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} category="science"/></Route>          
          <Route exact path="/technology"><News setProgress={setProgress}apiKey={apiKey} key="technology" pageSize={6} category="technology"/></Route>          
        </Switch>
        </Router>
      </div>
    )
  
}
export default App;


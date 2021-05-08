//importing libraries
import React from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';



//importing components 
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
// import Support from '../Support/Support';
// import Comments from '../Comments/Comments';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* making routes / sourcing components */}
      <Router>
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        {/* <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;

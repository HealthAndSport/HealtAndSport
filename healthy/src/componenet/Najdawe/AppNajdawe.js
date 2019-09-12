import React from 'react';
import Tips from './Tips';
import OverWeight from './OverWeight';
import Weight from './Weight';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Obese from './Obese';
function Hala() {
  return (
    <div className="App">
      <Weight/>
      <Router >
        <Route path="/tips" component={Tips} />
        <Route path="/overweight" component={OverWeight}/>
        {/* <Route path="/normal" component={Normal}/> */}
        <Route path="/obese" component={Obese}/>
        </Router>
    </div>
  );
}

export default Hala;
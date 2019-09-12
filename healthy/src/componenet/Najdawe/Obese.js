import React, { Component } from 'react';
class Obese extends Component {
  state = {
    hide: false
  }


  render() {
    return (
      <div
        className="w3-modal-content w3-card-4 w3-animate-zoom" 
        style={{ display: this.state.hide ? 'none' : 'block',  width: "70%", position: 'absolute', top: '20%', left: '10%' }}>
        <div className="w3-container w3-light-grey w3-padding">
          <button className="w3-button w3-right w3-white w3-border"
            onClick={() => { this.setState({ hide: true})}}>X</button>
        </div>
        <div className="w3-card-4"  >
          <header className="w3-container w3-red">
            <h1 style={{ fontFamily: 'Amaranth' }}>Obese</h1>
          </header>

          <div className="w3-container" style={{ fontFamily: 'Amaranth' }}>
            <p>Obesity is usually treated with lifestyle changes, including this advice diet and exercise.</p>
          <ul>
                <li>Dietary changes</li>
                <li>Avoid crash-dieting</li>
                <li>Physical activity</li>
                <li>Weight-loss medications</li>
                <li>Surgery</li>
              </ul>
            
          </div>

          <footer className="w3-container w3-red">
            <h5></h5>
          </footer>
        </div>
      </div>



    );
  }
}
export default Obese
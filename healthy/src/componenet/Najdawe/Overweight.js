import React, { Component } from 'react';
class OverWeight extends Component {
  state = {
    hide: false
  }
  render(){
      return(

<div
        className="w3-modal-content w3-card-4 w3-animate-zoom" 
        style={{ display: this.state.hide ? 'none' : 'block',  width: "70%", position: 'absolute', top: '20%', left: '10%' }}>
        <div className="w3-container w3-light-grey w3-padding">
          <button className="w3-button w3-right w3-white w3-border"
            onClick={() => { this.setState({ hide: true})}}>X</button>
        </div>
        <div className="w3-card-4"  >
          <header className="w3-container w3-orange">
            <h1 style={{ fontFamily: 'Amaranth' }}>Over Weight</h1>
          </header>

          <div className="w3-container" style={{ fontFamily: 'Amaranth' }}>
            <p>Tips to lose weight even faster</p>
          <ul>
                <li><b>Eat a high-protein breakfast.</b> Eating a high-protein breakfast has been shown to reduce cravings and calorie intake throughout the day .</li>
                <li><b>Avoid sugary drinks and fruit juice. </b>These are the most fattening things you can put into your body, and avoiding them can help you lose weight.</li>
                <li><b>Drink water a half hour before meals. </b>One study showed that drinking water a half hour before meals increased weight loss by 44% over 3 months .</li>
                <li><b>Choose weight loss-friendly foods .</b> Certain foods are very useful for losing fat. Here is a list of the 20 most weight loss-friendly foods on earth.</li>
                <li><b>Eat soluble fiber.</b> Studies show that soluble fibers may reduce fat, especially in the belly area. Fiber supplements like glucomannan can also help .</li>
                <li><b>Drink coffee or tea.</b> If you're a coffee or tea drinker, then drink as much as you want as the caffeine can in them boost your metabolism by 3–11% .</li>
                <li><b>Eat mostly whole, unprocessed foods.</b> Base most of your diet on whole foods. They are healthier, more filling and much less likely to cause overeating.</li>
                <li><b>Eat your food slowly.</b> Fast eaters gain more weight over time. Eating slowly makes you feel more full and boosts weight-reducing hormones .</li>
                <li><b>Weigh yourself every day.</b> Studies show that people who weigh themselves every day are much more likely to lose weight and keep it off for a long time .</li>
                <li><b>Get a good night's sleep, every night.</b> Poor sleep is one of the strongest risk factors for weight gain, so taking care of your sleep</li>
              </ul>
            
          </div>

          <footer className="w3-container w3-orange">
            <h5></h5>
          </footer>
        </div>
      </div>



      )
  }
}
export default OverWeight;
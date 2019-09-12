import React, { Component } from 'react';
class Tips extends Component {
  state = {
    hide: false
  }
  render(){
      return(
          <>
  <div
        className="w3-modal-content w3-card-4 w3-animate-zoom" 
        style={{ display: this.state.hide ? 'none' : 'block',  width: "70%", position: 'absolute', top: '20%', left: '10%' }}>
        <div className="w3-container w3-light-grey w3-padding">
          <button className="w3-button w3-right w3-white w3-border"
            onClick={() => { this.setState({ hide: true})}}>X</button>
        </div>
        <div className="w3-card-4"  >
          <header className="w3-container w3-red">
            <h1 style={{ fontFamily: 'Amaranth' }}>Under Weight</h1>
          </header>

          <div className="w3-container" style={{ fontFamily: 'Amaranth' }}>
            <p>Obesity is usually treated with lifestyle changes, including this advice diet and exercise.</p>
          <ul>
                <li><b>Eat more frequently.</b>  Eat five to six smaller meals during the day rather than two or three large meals.</li>
                <li><b>Choose nutrient-rich foods.</b>  choose whole-grain breads, pastas and cereals; fruits and vegetables; dairy products; lean protein sources; and nuts and seeds.</li>
                <li><b>Try smoothies and shakes.</b>drink smoothies or healthy shakes made with milk and fresh or frozen fruit.</li>
                <li><b>Watch when you drink.</b> Some people find that drinking fluids before meals blunts their appetite. In that case, it may be better to sip higher calorie beverages along with a meal or snack. For others, drinking 30 minutes after a meal, not with it, may work.</li>
                <li><b>Make every bite count.</b> Snack on nuts, peanut butter, cheese, dried fruits and avocados. Have a bedtime snack, such as a peanut butter and jelly sandwich, or a wrap sandwich with avocado, sliced vegetables, and lean meat or cheese.</li>
                <li><b>Top it off.</b> Add extras to your dishes for more calories — such as cheese in casseroles and scrambled eggs, and fat-free dried milk in soups and stews.</li>
<li><b>Have an occasional treat.</b>  be mindful of excess sugar and fat. An occasional slice of pie with ice cream is OK. But most treats should be healthy and provide nutrients in addition to calories. Bran muffins, yogurt and granola bars are good choices.</li>
<li><b>Exercise.</b> Exercise, especially strength training, can help you gain weight by building up your muscles. Exercise may also stimulate your appetite.</li>
              
              </ul>
            
          </div>

          <footer className="w3-container w3-red">
            <h5></h5>
          </footer>
        </div>
      </div>
          </>
      )
  }
}
export default Tips;
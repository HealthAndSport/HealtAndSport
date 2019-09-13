import React from 'react';
import AppYoutube from './componenet/AppYoutube/AppYoutube'
import Post from './componenet/Momani/Post'
import AppMomani from './componenet/Momani/AppMomani'
import './App.css';
// import AppNajdawe from './componenet/Najdawe/AppNajdawe'

function App() {
  return (
    <div className="App">
      
      <AppYoutube/>
      <Post/>
      {/* <AppNajdawe/> */}
      {/* <AppMomani/> */}
    </div>
  );
}

export default App;

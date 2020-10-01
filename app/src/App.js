import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section style={{display:'flex', width:'40vw', justifyContent:'space-around', flexWrap:'wrap'}}>
          <div className="">
            <img src="https://avatars1.githubusercontent.com/u/17689143?s=460&u=8b06e68750cb1e06e9e2a3d0c1c43ac3310eb37d&v=4" className="App-pics" alt="pics-avatar" />
            <p id="text-one">Thibeault</p>
          </div>
          <div className="content-pics">
            <img src="https://avatars1.githubusercontent.com/u/31790786?s=460&u=a6187b84f87f6d0d1cdd2d008fe8c2f4f66fe14f&v=4" className="App-pics" alt="pics-avatar" />
            <p id="text-two">Théo</p>
          </div>
          <div className="content-pics">
            <img src="https://avatars2.githubusercontent.com/u/62797676?s=460&v=4" className="App-pics" alt="pics-avatar" />
            <p id="text-three">Pierre</p>
          </div>
        </section>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </header>
      <footer style={{ background: "#101010", width: "100%", height: '10vh', color: "lightgray", display:"flex", justifyContent:'center', alignItems:'center'}}>
        <p style={{ fontWeight: "bold", opacity: 0.5 }}>Git TP - 2020 <span role="img" aria-label="heart">💜</span>
</p>
      </footer>
    </div>
  );
}

export default App;

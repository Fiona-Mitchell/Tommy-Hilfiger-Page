import React from 'react';
import logo from './logo.png';
import './App.scss';
import image from './assets/tommy-denim__header-men.jpg';

function App() {
  return (
    <div className="App">

    <html>
    <head>
    <title>Tommy Hilfiger Denim</title>

    </head>

    <body>
      <div class="container-1">
         <div class="column-center"><i>Enjoy free delivery on all orders over £50</i></div>
         <div class="column-left">UK/GBP (£) &nbsp; | &nbsp; Stores &nbsp; | &nbsp; Customer Service</div>
         <div class="column-right">Newsletter Sign up  &nbsp; | &nbsp; Sign in/Register
         </div>
      </div>
      <div class="container-2">
         <div class="column-center">
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Labels</li>
            <li>Sale</li>
          </ul>
         </div>
         <div class="column-left">
          <img src={logo} width="175px"/>
         </div>
         <div class="column-right">
           <input type="text" placeholder="Search"/>
         </div>
      </div>
      <div class="container-3">
         <div class="column-left-block">
           <div class="mini-title">
             <h2><span>24/7 LIVE.</span></h2>
           </div>
           <h2>Spring <br/><span> 2017</span></h2>
           <h3>With Anwar Hadid <br/> & Sophia Richie</h3>
           <p>Engineered for perfect form and exceptional fit - whatever you do in them.</p>
         </div>
         <div class="column-right-block">
           <img src={image} alt="" width="100%"/>
         </div>
      </div>
      <div class="white-block-1"></div>
      <div class="white-block-2"></div>
      <div class="white-block-3"></div>
      </body>
    </html>
    </div>
  );
}

export default App;

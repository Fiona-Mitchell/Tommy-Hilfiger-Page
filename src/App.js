import React from 'react';
import logo from './logo.png';
import './App.css';
import image from './assets/tommy-denim__header-men.jpg';

function App() {
  return (
    <div className="App">
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
           <h2>Spring <br/> 2017</h2>
           <br/>
           <h3>With Anwar Hadid <br/> & Sophia Richie</h3>
           <br/>
           <p>Engineered for perfect form and <br/> exceptional fit - whatever you do <br/> in them.</p>
         </div>
         <div class="column-right-block">
           <img src={image} alt="" width="100%"/>
         </div>
      </div>
      </body>

    </div>
  );
}

export default App;

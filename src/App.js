import React from 'react';
import logo from './logo.png';
import './App.scss';
import image from './assets/tommy-denim__header-men.jpg';
import imageArm from './assets/tommy-denim__arm.png';

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
           <div class="collection-text">
             <h2>Spring <br/><span> 2017</span></h2>
             <h3>With Anwar Hadid <br/> & Sophia Richie</h3>
             <p>Engineered for perfect form and exceptional fit - whatever you do in them.</p>
           </div>
         </div>
         <div class="column-right-block">
           <img src={image} alt="" width="100%"/>
         </div>
      </div>
      <div class="white-block-1"></div>
      <div class="white-block-2"></div>
      <div class="white-block-3"></div>
      <div class="title">
        <div class="L-O-V-E">
        <svg version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 120.45 73.89" enable-background="new 0 0 120.45 73.89">
            <path id="heart-shape" fill="#CC1331" stroke="#CC1333" stroke-width="0.5" stroke-miterlimit="10" d="M49.56 9.45c-1.01-7.29-6.67-9.19-9.63-9.19h-0.01C36.91 0 34.67 1.84 33.31 3.17 31.97 1.86 29.76 0 26.7 0.26h-0.01c-2.96 0-8.62 1.9-9.63 9.19 -0.06 0.45-0.51 4.5 2.7 9.5 3.3 5.15 10.68 9.48 12.85 10.4l0.7 0.3 0.7-0.3c2.17-0.92 9.55-5.25 12.85-10.4C50.07 13.95 49.62 9.91 49.56 9.45L49.56 9.45zM43.27 17.03c-2.29 3.56-7.54 7.01-10.01 8.26 -2.47-1.25-7.72-4.7-10.01-8.27 -2.42-3.77-2.05-6.71-2.05-6.71 0.77-5.61 6-5.78 6-5.78 2.8-0.24 4.54 1.94 4.77 2.24l0.52 0.68 0.81 1.09 0.75-1.05 0.55-0.7c0.15-0.18 1.77-2.44 4.73-2.29 0 0 5.41 0 5.99 5.82C45.34 10.45 45.69 13.26 43.27 17.03L43.27 17.03z"/>
            <path class="L" fill="#CC1333" d="M1.63 29.92V0h5.16v24.96h3.68v4.97H1.63z"/>
            <path class="V" fill="#CC1333" d="M59.37 0.34h5.52l0.67 10.95 0.69 10.69 0.69-10.69 0.69-10.95h5.16l-3.43 29.36H63L59.37 0.34z"/>
            <path class="E" fill="#CC1333" d="M87.2 29.78V0.42h9.68V5.3h-4.52v7.17h3.93v4.87h-3.93v7.57h4.52v4.87H87.2z"/>
            <path class="dot-one" fill="#CC1333" d="M108.98 29.78v-5.36h4.87v5.36H108.98z"/>

            <path class="L-L-A" fill="#CC1333" d="M50.81 68.84V39.48h5.16v24.48h3.68v4.87H50.81z"/>
            <path class="L-L-A-dot" fill="#CC1333" d="M67.46 68.84v-5.36h4.87v5.36H67.46z"/>
            <path class="A-L-A"fill="#CC1333" d="M80.14 68.84l3.4-29.36h6.57l3.4 29.36h-5.16l-0.41-5.71h-2.23l-0.41 5.71H80.14zM86.14 58.64h1.37l-0.16-3.97c-0.25-5.2-0.4-8.33-0.47-9.4h-0.12c-0.03 0.9-0.1 2.4-0.2 4.49 -0.11 2.1-0.19 3.73-0.25 4.9L86.14 58.64z"/>
            <path class="A-L-A-dot" fill="#CC1333" d="M101.31 68.84v-5.36h4.87v5.36H101.31z"/>
          </svg>
        </div>
      </div>
      <div class="container-4">
         <div class="column-left-block"></div>
         <div class="column-right-block">
           <div class="arm">
             <img src={imageArm} alt="" width="100%"/>
           </div>
         </div>
      </div>
      </body>
    </html>
    </div>
  );
}

export default App;

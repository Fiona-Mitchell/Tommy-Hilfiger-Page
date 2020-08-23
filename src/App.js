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
      <div class="title">
        <div class="L-O-V-E">
          <svg id="Layer_1" x="0" y="0" viewBox="0 0 133.28 89.72" enable-background="new 0 0 133.28 89.72">
            <path id="heart-shape" fill="#CC1331" d="M53.25 16.53c-1.08-7.82-7.16-9.87-10.33-9.87h-0.01c-3.24-0.28-5.64 1.7-7.1 3.12 -1.44-1.41-3.81-3.4-7.1-3.12H28.7c-3.18 0-9.25 2.04-10.33 9.87 -0.07 0.49-0.55 4.83 2.89 10.2 3.54 5.52 11.46 10.18 13.79 11.16l0.75 0.32 0.75-0.32c2.33-0.98 10.25-5.64 13.79-11.16C53.8 21.36 53.32 17.02 53.25 16.53L53.25 16.53zM46.5 24.66c-2.45 3.82-8.09 7.53-10.74 8.87 -2.65-1.34-8.29-5.05-10.74-8.87 -2.6-4.05-2.2-7.2-2.2-7.2 0.83-6.02 6.44-6.21 6.44-6.21 3.01-0.26 4.87 2.08 5.12 2.41l0.56 0.73 0.87 1.17 0.81-1.12 0.59-0.75c0.16-0.19 1.9-2.62 5.07-2.46 0 0 5.8 0 6.43 6.25C48.72 17.6 49.1 20.61 46.5 24.66L46.5 24.66z"/>
            <path class="L" fill="#CC1333" d="M1.8 38.35V6.84h5.54v26.28h3.96v5.23H1.8z"/>
            <path class="V" fill="#CC1333" d="M63.78 6.75h5.93l0.72 11.76 0.74 11.47 0.74-11.47 0.74-11.76h5.54l-3.68 31.51h-6.84L63.78 6.75z"/>
            <path class="E" fill="#CC1333" d="M95.84 38.35V6.84h10.39v5.23h-4.86v7.69h4.22v5.23h-4.22v8.13h4.86v5.23H95.84z"/>
            <path class="dot-one" fill="#CC1333" d="M119.21 38.35v-5.76h5.23v5.76H119.21z"/>
            <path class="L-L-A" fill="#CC1333" d="M52.08 80.18V48.67h5.54v26.28h3.96v5.23H52.08z"/>
            <path class="L-L-A-dot" fill="#CC1333" d="M72.46 80.27v-5.76h5.23v5.76H72.46z"/>
            <path class="A-L-A"fill="#CC1333" d="M87.21 80.27l3.65-31.51h7.05l3.65 31.51h-5.54l-0.44-6.13h-2.4l-0.44 6.13H87.21zM93.65 69.33h1.47l-0.18-4.26c-0.26-5.58-0.43-8.94-0.5-10.08h-0.13c-0.03 0.97-0.1 2.57-0.22 4.82 -0.12 2.25-0.21 4-0.26 5.26L93.65 69.33z"/>
            <path class="A-L-A-dot" fill="#CC1333" d="M111.71 80.27v-5.76h5.23v5.76H111.71z"/>
          </svg>
        </div>
      </div>
      </body>
    </html>
    </div>
  );
}

export default App;

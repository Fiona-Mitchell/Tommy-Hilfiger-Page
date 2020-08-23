# Tommy-Hilfiger-Technical-Challenge-SHCC

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn`

Installs all dependencies for this project.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# My Process

## Step 1 - Set up & basic layout
* I used create react app
* Installed and navigated through git 
* I used JSX to build the nav bar, images and fade-out white blocks
* I used some SCSS to style these elements
* I believe the nav-area fonts were not included so these are defaulted to Arial

## Step 2 - SVG
* I opened the heart-shape SVG provided in Adobe Illustrator, and fixed the cropped edge by "fitting to artwork bounds"
* I found it easier to animate SVGs, so I imported the font provided and created the other letters: L   V E. L.A.
* I created 'outlines' from the text so that they render as best as possible as an SVG
* I labelled each layer with a unique ID
* I targeted these IDs with @keyframe animations
* I also used classes to animate the other pieces of text and time-stepped them accordingly

## Step 3 - The arm
* I noticed the layering between the arm and the letters - I've theorised this has been done by over-laying a transparent png?
* I used photoshop to create this png file and used absolute positioning to align it directly on top
* This now means my page is no longer responsive as I had to used fixed measurements
* I found it tricky to find another way to create this effect, but with more time I could experiment with other solutions
* I then noticed that my hover state on the heart-shape was impacted by the png (it only worked when hovering over the white area) so I separated the 'V' from the rest of the letters, to manually adjust its z-index
* Originally my `transform: translateX(5px);` worked on hover state, but no longer moves - this could be solved by using useState Hook in React

## Step 4 - the video
* I found this step the trickiest
* I would use useState Hook in React for the play/pause buttons
* I would use GSAP to animate the 'grey-blocks' on scroll
* I am unsure how to achieve the circular progress bar

I enjoyed cracking through this! And I'll continue to work on the video section this week :blush:

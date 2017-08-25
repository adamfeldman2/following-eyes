const canvas = document.querySelector('canvas');
const cx = canvas.getContext('2d');

let xboxX = 0;
let xboxY = 0;
let pupilsX = 0;
let pupilsY = -2;

// images //
const background = new Image();
background.src = 'images/background@2x.png'

const kid = new Image();
kid.src = 'images/kid@2x.png'

const xbox = new Image();
xbox.src = 'images/xbox@2x.png'

const pupils = new Image();
pupils.src = 'images/eyeballs@2x.png'

const eyeWhites = new Image();
eyeWhites.src = 'images/eye-whites@2x.png'

function addStaticAssets(xboxX, xboxY, pupilsX, pupilsY) {
  cx.drawImage(background, 0, 0, background.naturalWidth / 2, background.naturalHeight / 2);
  cx.drawImage(eyeWhites, 0, 0, eyeWhites.naturalWidth / 2, eyeWhites.naturalHeight / 2);
  cx.drawImage(pupils, pupilsX, pupilsY, pupils.naturalWidth / 2, pupils.naturalHeight / 2);
  cx.drawImage(kid, 0, 0, kid.naturalWidth/2, kid.naturalHeight/2);
  cx.drawImage(xbox, xboxX, xboxY, xbox.naturalWidth/2.4, xbox.naturalHeight/2.4);
}

function moveXboxAndEyesMobile(e) {
  e.preventDefault();
  console.log('xbox x: ', e.touches[0].clientX - 140);
  console.log('xbox y: ', e.touches[0].clientY - 100);
  xboxX = e.touches[0].clientX - 123;
  xboxY = e.touches[0].clientY - 100;

  if (xboxX >= 112) {
    pupilsX = 3.5;
  } else if (xboxX <= -5) {
    pupilsX = -2.4;
  } else {
    pupilsX = 0;
  }

  if (xboxY >= 245) {
    pupilsY = 0.8;
  } else if (xboxY <= 100) {
    pupilsY = -4.8;
  } else {
    pupilsY = -1;
  }
}

// function moveXboxAndEyesDesktop(e) {
//   console.log('xbox x: ', e.clientX - 330);
//   console.log('xbox y: ', e.clientY - 110);

//   xboxX = e.clientX - 330;
//   xboxY = e.clientY - 110;

//   if (xboxX >= 115) {
//     pupilsX = 3.5;
//   } else if (xboxX <= -3) {
//     pupilsX = -2.2;
//   } else {
//     pupilsX = 0;
//   }

//   if (xboxY >= 210) {
//     pupilsY = 0.8;
//   } else if (xboxY <= 120) {
//     pupilsY = -4.8;
//   } else {
//     pupilsY = -1;
//   }
// }

function runLoop() {
  cx.clearRect(0, 0, canvas.width, canvas.height);
  addStaticAssets(xboxX, xboxY, pupilsX, pupilsY);
  window.requestAnimationFrame(runLoop);
}

function init() {
  canvas.addEventListener('touchstart', moveXboxAndEyesMobile);
  canvas.addEventListener('touchmove', moveXboxAndEyesMobile);
  // canvas.addEventListener('mousemove', moveXboxAndEyesDesktop);
  runLoop();
}

init();
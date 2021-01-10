// birdthday
let day = 0;

// imgSet
let imgIndex = 0;
let imgs = [
  'imgs/set1.png',
  'imgs/set2.png',
  'imgs/set3.png',
  'imgs/set4.png',
  'imgs/set5.png'
];

// references
let start = document.querySelector('#showBtn');
let showBox = document.querySelector('.showbox');
let yesBtn = document.querySelector('#yes');
let noBtn = document.querySelector('#no');
let imgSet = document.querySelector('#img');
let showResult = document.querySelector('#showResult');
let playAgainBtn = document.querySelector('#playAgain');
let birdthday = document.querySelector('#birthday');
let setNum = document.querySelector('#setNum');


start.addEventListener('click', startGame);
yesBtn.addEventListener('click', add);
noBtn.addEventListener('click', doNotAdd);
playAgainBtn.addEventListener('click', restart);

// Start Game function
function startGame() {
  showBox.style.display = 'block';
}

// Counting the day if the user clicks yes btn
function add() {
  day += Math.pow(2, imgIndex);
  if (day > 31) {
    return false;
  }
  imgIndex += 1;

  if (imgIndex >= 5) {
    birdthday.innerText = day;
    showResult.style.display = 'block';
    playAgainBtn.style.display = 'inline-block';
    return false;
  }
  imgSet.src = imgs[imgIndex];
  setNum.innerText = imgIndex + 1;
}

// if user clicks no, don't add anything but change the pic
function doNotAdd() {
  if (imgIndex >= 5) {
    return false;
  }
  imgIndex += 1;
  setNum.innerText = imgIndex;

  if (imgIndex >= 5) {
    birdthday.innerText = day;
    showResult.style.display = 'block';
    playAgainBtn.style.display = 'inline-block';
    return false;
  }
  imgSet.src = imgs[imgIndex];
  setNum.innerText = imgIndex + 1;
}

function restart() {
  showResult.style.display = 'none';
  playAgainBtn.style.display = 'none';
  day = 0;
  setNum.innerText = 1;
  imgIndex = 0;
  imgSet.src = imgs[imgIndex];
}
const contentElem = document.querySelector('.content');
const fortuneElem = document.querySelector('.fortune');
const dateElem = document.querySelector('.title-date');
const itemElem = document.querySelector('.btm-item');
const numberElem = document.querySelector('.btm-number');

const today = new Date(); // 현재 날짜와 시간을 가져옴
const year = today.getFullYear(); // 현재 연도를 가져옴
const month = String(today.getMonth() + 1).padStart(2, '0'); // 현재 월을 가져오고 두자리 형태로 변환
const date = String(today.getDate()).padStart(2, '0'); // 현재 일을 가져오고 두자리 형태로 변환

const dateArr = [year, month, date]; // 배열에 년, 월, 일을 차례로 담음
console.log(dateArr); // 예시 출력: [2021, 09, 28]



function setDate() {
  dateElem.innerText = `${year}${month}${date}`;
}

function setLuckyNum() {
  numberElem.innerText = `${Math.round(Math.random() * 99)}`;
}


let json1;
let json2;

async function load() {
  // 파일 읽어 오기
  const response1 = await fetch('./fortune.json');
  const response2 = await fetch('./item.json');
  // JSON으로 해석
  json1 = await response1.json();
  json2 = await response2.json();

  let ranNum1 = Math.floor(Math.random() * json1.length);
  let ranNum2 = Math.floor(Math.random() * json2.length);
  fortuneElem.innerText = `${json1[ranNum1].fortune}`;
  itemElem.innerText = `${json2[ranNum1].item}`;
}


load();




let message = 'Have a good day!';
let messageX;
let anthony;
let topLayer;

const xSpeed = 2.4;
const ySpeed = 0.05;
const amplitude = 50;
const verticalLetterSpacing = 7;

function preload() {
  anthony = loadFont('./font/Anthony.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  topLayer = createGraphics(width, height);

  textFont(anthony);
  messageX = width;
  
  topLayer.strokeWeight(50);
  topLayer.stroke(rgbVals[0], rgbVals[1], rgbVals[2]);
}


function draw() {
  
  background(255);
  fill(0);

  textSize(180);

  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 2 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;

    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width + 50;
  }

  if (mouseIsPressed) {
    topLayer.line(mouseX, mouseY, pmouseX, pmouseY);
  }
  image(topLayer, 0, 0);
}



let rgbVals;
let tempColor;




window.addEventListener('DOMContentLoaded', () => {
  rgbVals = randomRGB();
  tempColor = "rgb(" + rgbVals[0] + ", " + rgbVals[1] + ", " + rgbVals[2] + ")";
  contentElem.style.backgroundColor = `${tempColor}`;

  setDate();
  setLuckyNum();
});

setTimeout(() => {
  contentElem.style.opacity = 1;
}, 500);



function randomNum() {
  return Math.floor(Math.random() * 256);
}
randomNum();


function randomRGB() {
  let red = randomNum();
  let green = randomNum();
  let blue = randomNum();
  if (red + green + blue <= 130) {
    red = randomNum();
    green = randomNum();
    blue = randomNum();
  } else {
    return [red,green,blue];
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 99) + 1;
}
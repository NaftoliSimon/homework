(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');
  const eatSound = document.getElementById('appleCrunch');
  const outOfBoundsSound = document.getElementById('wallBump');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function chooseRandomNum(max) {
    return Math.floor(Math.random() * max + 1);
  }

  const appleImg = new Image();
  appleImg.src = 'images/apple3.png';

  let score = 0;
  let speed = 400;
  const maxX = 20;
  const maxY = 9;

  const img = new Image();
  img.src = 'images/snakehead.png';
  img.addEventListener('load', () => {
    const SNAKE_SIZE = 64;
    let direction = 'ArrowRight';
    let x = 0;
    let y = 0;

    let appleX;
    let appleY;

    function setNewAppleLoc() {
      appleX = SNAKE_SIZE * chooseRandomNum(maxX);
      appleY = SNAKE_SIZE * chooseRandomNum(maxY);
    }

    function drawImages() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, SNAKE_SIZE, SNAKE_SIZE);
      context.drawImage(appleImg, appleX, appleY, SNAKE_SIZE, SNAKE_SIZE);
    }
    function outOfBoundsCheck() {
      if (x / SNAKE_SIZE > maxX || y / SNAKE_SIZE > maxY || x / SNAKE_SIZE < 0 || y / SNAKE_SIZE < 0) {
        outOfBoundsSound.play();
        alert(`Game Over. Score: ${score}`);
        resetGame();
      }
    }
    function resetGame() {
      direction = 'ArrowRight';
      x = 0;
      y = 0;
      score = 0;
      setNewAppleLoc();
    }

    setNewAppleLoc();

    setInterval(() => {
      outOfBoundsCheck();
      drawImages();

      if (appleX === x && appleY === y) {
        eatSound.play();
        setNewAppleLoc();
        drawImages();
        score++;
      }

      context.font = 'bold 25px serif';
      context.fillText(`Eaten: ${score}`, canvas.width - 135, 30);

      switch (direction) {
        case 'ArrowLeft':
          x -= SNAKE_SIZE;
          break;
        case 'ArrowRight':
          x += SNAKE_SIZE;
          break;
        case 'ArrowUp':
          y -= SNAKE_SIZE;
          break;
        case 'ArrowDown':
          y += SNAKE_SIZE;
          break;
      }
    }, speed);

    document.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          direction = e.key;
      }
    });
  });
}());
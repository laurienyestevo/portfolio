let menuBtn = document.getElementById('MenuBtn')

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})




const canvas = document.getElementById('balls-canvas');
const context = canvas.getContext('2d');

// definir a quantidade de bolas e suas propriedades
const ballCount = 30;
const ballMinSize = 1;
const ballMaxSize = 3;
const ballMinSpeed = 1;
const ballMaxSpeed = 4;
const ballColors = ['#0080ff', '#00bfff', '#00ffff'];

// criar um array para armazenar as bolas
const balls = [];
for (let i = 0; i < ballCount; i++) {
  // definir as propriedades da bola aleatoriamente
  const size = Math.floor(Math.random() * (ballMaxSize - ballMinSize)) + ballMinSize;
  const x = Math.floor(Math.random() * canvas.width);
  const y = canvas.height + size + Math.floor(Math.random() * canvas.height);
  const speed = Math.floor(Math.random() * (ballMaxSpeed - ballMinSpeed)) + ballMinSpeed;
  const color = ballColors[Math.floor(Math.random() * ballColors.length)];

  // adicionar a bola ao array
  balls.push({
    size,
    x,
    y,
    speed,
    color,
  });
}

// animar as bolas
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach(ball => {
    // mover a bola para cima
    ball.y -= ball.speed;

    // se a bola sair da tela, reiniciar sua posição
    if (ball.y < -ball.size) {
      ball.y = canvas.height + ball.size + Math.floor(Math.random() * canvas.height);
      ball.x = Math.floor(Math.random() * canvas.width);
    }

    // desenhar a bola
    context.beginPath();
    context.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    context.fillStyle = ball.color;
    context.fill();
    context.closePath();
  });

  requestAnimationFrame(animate);
}
animate();
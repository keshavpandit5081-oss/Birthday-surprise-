function startCelebration(){
  alert("Happy 23rd Birthday My Ekku ❤️🎉");
  
  document.body.style.background="#fff0f5";
  
  // Add confetti animation
  createConfetti();
  
}

function createConfetti() {
  const confettiContainer = document.getElementById('confetti');
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff4d88', '#ffb3d9', '#ff80b0', '#ffd9e8'][Math.floor(Math.random() * 4)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '1000';
    
    confettiContainer.appendChild(confetti);
    
    // Animate falling
    animateConfetti(confetti);
  }
}

function animateConfetti(element) {
  let top = -10;
  let left = parseFloat(element.style.left);
  
  const interval = setInterval(() => {
    top += Math.random() * 3 + 2;
    left += (Math.random() - 0.5) * 2;
    
    element.style.top = top + 'px';
    element.style.left = left + '%';
    element.style.opacity = 1 - (top / window.innerHeight);
    
    if (top > window.innerHeight) {
      clearInterval(interval);
      element.remove();
    }
  }, 30);
}
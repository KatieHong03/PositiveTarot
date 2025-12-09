document.addEventListener('DOMContentLoaded', () => {
  const stack = document.getElementById('cardStack');
  
  if (!stack) return;

  // Create 22 cards in a horizontal fan immediately on page load
  const CARD_COUNT = 22;
  
  for (let i = 0; i < CARD_COUNT; i++) {
    const card = document.createElement('div');
    card.className = 'tarot-card fan-card';
    card.dataset.index = i;
    
    const img = document.createElement('img');
    img.style.width = '100%';
    img.style.height = '100%';
    img.src = 'Back_Card.jpg';
    img.alt = 'card back';
    card.appendChild(img);
    
    // Set staggered delay for entrance animation
    card.style.setProperty('--delay', `${i * 25}ms`);
    
    // Add click event to each card to navigate to a RANDOM Card page
    card.addEventListener('click', () => {
      const randomCardNumber = Math.floor(Math.random() * 22);
      
      // Add fade-out transition
      document.body.style.transition = 'opacity 0.8s ease-out';
      document.body.style.opacity = '0';
      
      // Navigate after transition completes
      setTimeout(() => {
        window.location.href = `Card${randomCardNumber}.html`;
      }, 800);
    });
    
    stack.appendChild(card);
  }
  
  // Trigger the entrance animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const cards = stack.querySelectorAll('.fan-card');
      cards.forEach(card => {
        card.classList.add('visible');
      });
    });
  });

  // Button functionality
  const shuffleAgainBtn = document.getElementById('shuffleAgainBtn');
  const backHomeBtn = document.getElementById('backHomeBtn');

  if (shuffleAgainBtn) {
    shuffleAgainBtn.addEventListener('click', () => {
      window.location.href = 'Shuffle.html';
    });
  }

  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', () => {
      window.location.href = 'Home.html';
    });
  }
});

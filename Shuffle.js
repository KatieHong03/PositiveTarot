const shuffleBtn = document.getElementById('shuffleButton');
const cardStack = document.getElementById('cardStack');

shuffleBtn.addEventListener('click', () => {
    console.log('Shuffling...');
    
    // Disable button during animation
    shuffleBtn.disabled = true;
    
    // Add shuffling class to trigger animation
    cardStack.classList.add('shuffling');
    
    // Remove shuffling class and navigate after animation
    setTimeout(() => {
        cardStack.classList.remove('shuffling');
        shuffleBtn.disabled = false;
        
        // Navigate to pickcard page after shuffle
        window.location.href = 'pickcard.html';
    }, 800);
});


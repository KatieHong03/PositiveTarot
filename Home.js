function beginDrawing() {
    window.location.href = 'Shuffle.html';
}

function showAbout() {
    // Add fade-out transition
    document.body.style.transition = 'opacity 0.8s ease-out';
    document.body.style.opacity = '0';
    
    // Navigate after transition completes
    setTimeout(() => {
        window.location.href = 'about.html';
    }, 800);
}
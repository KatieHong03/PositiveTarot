document.addEventListener('DOMContentLoaded', () => {
    const shuffleBtn = document.getElementById('shuffleBtn');
    const cardStack = document.getElementById('cardStack');

    if (!shuffleBtn || !cardStack) {
        // Elements not found; nothing to do.
        return;
    }

    shuffleBtn.addEventListener('click', () => {
        // Simple visual shuffle: add class to trigger CSS transforms,
        // disable the button while animating and re-enable after.
        shuffleBtn.disabled = true;
        cardStack.classList.add('shuffling');

        // Match timeout to CSS transition (~800ms) plus a small buffer.
        const ANIM_MS = 900;
        setTimeout(() => {
            cardStack.classList.remove('shuffling');
            shuffleBtn.disabled = false;
        }, ANIM_MS);
    });
});
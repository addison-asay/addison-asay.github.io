const writingArea = document.getElementById('writingArea');
const wordCountDisplay = document.getElementById('wordCount');

writingArea.addEventListener('input', () => {
    const words = writingArea.value.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    wordCountDisplay.textContent = `Word Count: ${wordCount}/750`;

    if (wordCount >= 750) {
        wordCountDisplay.style.color = 'green';  // Goal reached
    } else {
        wordCountDisplay.style.color = 'black';
    }
});

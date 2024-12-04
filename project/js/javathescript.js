function readMind() {
    const input = document.getElementById('mindInput').value;
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');
    
    loading.style.display = 'block';
    result.innerHTML = '';
    
    setTimeout(() => {
        loading.style.display = 'none';
        result.innerHTML = `Mind successfully read, you were thinking of: <b>${input}</b>`;
    }, 2000);
}

function getShrimped() {
    const shrimpImage = document.getElementById('shrimp-image');
    const shrimpSound = document.getElementById('shrimp-sound');
    
    shrimpImage.style.display = 'block';
    
    const text = document.createElement('h2');
    text.textContent = "You've been shrimped!";
    shrimpImage.parentNode.insertBefore(text, shrimpImage.nextSibling);
    
    shrimpSound.play();
}
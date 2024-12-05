function getShrimped() {
    const shrimpImage = document.getElementById('shrimp-image');
    const shrimpSound = document.getElementById('shrimp-sound');
    const guitarSound = document.getElementById('guitar-sound');
    const guitarImage = document.getElementById('guitar-shrimp');
  
    shrimpImage.style.display = 'block';
    shrimpSound.play();
  
    shrimpSound.addEventListener('ended', () => {
      guitarSound.play();
      guitarImage.style.display = 'block';
      guitarImage.classList.add('dance');
      fadeInOut(guitarImage);
    });
  }
  
  function fadeInOut(element) {
    let opacity = 0;
    let direction = 1;
  
    function animate() {
      opacity += 0.01 * direction;
      element.style.opacity = opacity;
  
      if (opacity <= 0) {
        direction = 1;
      } else if (opacity >= 1) {
        direction = -1;
      }
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  document.getElementById('submitBtn').addEventListener('click', () => {
    const input = document.getElementById('mindInput').value;

    if (!input) {
        alert("Please enter a thought before submitting!");
        return;
    }

  
    document.getElementById('input-section').style.display = 'none';

    const audio = document.getElementById('backgroundAudio');
    audio.play();

    const loadingAnimation = document.getElementById('loading-animation');
    loadingAnimation.style.display = 'block';
  
    setTimeout(() => {
        loadingAnimation.style.display = 'none';
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `You are thinking about: ${input}`;
        resultDiv.style.display = 'block';
    }, 5000); 
});

const shrimpImages = [
  "images/shrimp1.jpg",
  "images/shrimp2.jpg",
  "images/shrimp3.gif",
  "images/shrimp4.jpg",
  "images/shrimp5.jpg",
  "images/shrimp6.jpg"
];

function loadRandomShrimp() {
  const randomImage = shrimpImages[Math.floor(Math.random() * shrimpImages.length)];

  const shrimpImage = document.getElementById("shrimpimage");
  shrimpImage.src = randomImage;

  shrimpImage.style.display = "block";
}

function startSoundcloudAudio() {
  const iframe = document.getElementById("soundcloudPlayer");
  const widget = SC.Widget(iframe);

  widget.play(); 
}

window.onload = () => {
  loadRandomShrimp(); 
  startSoundcloudAudio(); 
};


document.getElementById("newShrimpBtn").addEventListener("click", loadRandomShrimp);

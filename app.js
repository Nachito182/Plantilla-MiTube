document.getElementById('theme-toggle').onclick = () => {
  document.body.classList.toggle('light-theme');
};

const thumbnailOverlay = document.getElementById('thumbnailOverlay');
    const video = document.getElementById('mainVideo');
    const playButton = document.getElementById('playButton');
  
    playButton.addEventListener('click', () => {
      thumbnailOverlay.style.display = 'none';
      video.style.display = 'block';
      video.play();
    });



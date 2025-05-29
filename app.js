const videoInput = document.getElementById('video-upload');
const videoList = document.getElementById('video-list');
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');

let videos = [];

videoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    videos.push({ title: file.name, url });

    renderVideos();
  }
});

function renderVideos() {
  videoList.innerHTML = '';
  videos.forEach((video, index) => {
    const thumb = document.createElement('div');
    thumb.innerText = video.title;
    thumb.style.cursor = 'pointer';
    thumb.style.border = '1px solid #444';
    thumb.style.padding = '10px';
    thumb.style.background = '#333';

    thumb.addEventListener('click', () => {
      mainVideo.src = video.url;
      videoTitle.textContent = video.title;
    });

    videoList.appendChild(thumb);
  });
}

// Tema oscuro/claro
document.getElementById('toggle-theme').onclick = () => {
  document.body.classList.toggle('light');
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(() => {
      console.log('Service Worker registrado');
    });
  }
  
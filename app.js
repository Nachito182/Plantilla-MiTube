const videoInput = document.getElementById('video-upload');
const videoList = document.getElementById('video-list');
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');
const search = document.getElementById('search');

let videos = [];

videoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    videos.push({ title: file.name, url });
    renderVideos();
  }
});

function renderVideos(filter = '') {
  videoList.innerHTML = '';
  videos
    .filter((v) => v.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach((video) => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.innerText = video.title;
      card.onclick = () => {
        mainVideo.src = video.url;
        videoTitle.textContent = video.title;
      };
      videoList.appendChild(card);
    });
}

search.addEventListener('input', (e) => {
  renderVideos(e.target.value);
});

document.getElementById('theme-toggle').onclick = () => {
  document.body.classList.toggle('light-theme');
};



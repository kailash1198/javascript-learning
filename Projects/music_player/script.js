const playBtn = document.querySelector(".play-btn");

const audioTag = document.querySelector("audio");

playBtn.addEventListener("click", () => {
  if (audioTag.paused) {
    audioTag.play();
  }else{
    audioTag.pause()
  }
});

const videoList = [
  {
    video: "the-1.mp4",
    title: "01. the 1",
  },

  {
    video: "cardigan.mp4",
    title: "02. cardigan",
  },

  {
    video: "the-last.mp4",
    title: "03. the last great american dynasty",
  },

  {
    video: "exile.mp4",
    title: "04. exile",
  },

  {
    video: "my-tears-ricochet.mp4",
    title: "05. my tears ricochet",
  },

  {
    video: "mirrorball.mp4",
    title: "06. mirrorball",
  },

  {
    video: "seven.mp4",
    title: "07. seven",
  },

  {
    video: "august.mp4",
    title: "08. august",
  },

  {
    video: "this-is-me-trying.mp4",
    title: "09. this is me trying",
  },

  {
    video: "illicit affairs.mp4",
    title: "10. illicit affairs",
  },

  {
    video: "invisible-string.mp4",
    title: "11. invisible string",
  },

  {
    video: "mad-woman.mp4",
    title: "12. mad woman",
  },

  {
    video: "epiphany.mp4",
    title: "13. epiphany",
  },

  {
    video: "betty.mp4",
    title: "14. betty",
  },

  {
    video: "peace.mp4",
    title: "15. peace",
  },

  {
    video: "hoax.mp4",
    title: "16. hoax",
  },
];

let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});
// I want to make it like  a playlist and have some interaction before choosing the video to play.
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}
//  so far I just managed to code the play button, I ddi try to code the progress bar as well as the backward or forward button but they didn't work.

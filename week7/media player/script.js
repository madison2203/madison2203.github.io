const myVideo = document.querySelector(#"my-Video");
console.log(myVideo);

const.playPauseButton = document.querySelector(#"play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseMe);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function playPauseMe() {
    if (myVideo.paused || myVideo.ended) {
        myVideo.play ();
        playPausedImg.src = 
    }
}
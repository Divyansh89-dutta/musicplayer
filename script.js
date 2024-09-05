var audio = document.querySelector("audio");
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var volumeControl = document.querySelector("#volume");
var volumeDown = document.querySelector("#volume-down");
var volumeUp = document.querySelector("#volume-up");
var seek = document.querySelector("#seek");
var currentTimeElement = document.querySelector(".current-time");
var durationElement = document.querySelector(".duration");

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = Math.floor(seconds % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}
play.addEventListener("click", function () {
    audio.play();
    play.classList.add("hidden");
    pause.classList.remove("hidden");
});
pause.addEventListener("click", function () {
    audio.pause();
    play.classList.remove("hidden");
    pause.classList.add("hidden");
});
previous.addEventListener("click", function () {
    audio.currentTime = 0;
    if (audio.paused) {
        audio.play();
        play.classList.add("hidden");
        pause.classList.remove("hidden");
    }
});
next.addEventListener("click", function () {
    audio.currentTime = 0;
    if (audio.paused) {
        audio.play();
        play.classList.add("hidden");
        pause.classList.remove("hidden");
    }
});
volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value;
});
volumeDown.addEventListener("click", function () {
    audio.volume = Math.max(0, audio.volume - 0.1);
    volumeControl.value = audio.volume;
});
volumeUp.addEventListener("click", function () {
    audio.volume = Math.min(1, audio.volume + 0.1);
    volumeControl.value = audio.volume;
});
    seek.addEventListener("input", function () {
        var seekTime = audio.duration * (seek.value / 100);
        audio.currentTime = seekTime;
    });
    audio.addEventListener("timeupdate", function () {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        seek.value = (currentTime / duration) * 100;
        currentTimeElement.textContent = formatTime(currentTime);
        durationElement.textContent = formatTime(duration);
    });
    audio.addEventListener("loadedmetadata", function () {
        durationElement.textContent = formatTime(audio.duration);
    });
    audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        audio.play();
    });
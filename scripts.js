const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Functionalities
function togglePlay() {
  console.log("click");
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon, this.paused);
  toggle.textContent = icon;
}

function handleSkip(button) {
  video.currentTime += parseFloat(button.dataset.skip);
}

function handleProgress() {
  const currentProgress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${currentProgress}%`;
}

function handleRangeUpdate(range) {
  video[range.name] = range.value;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Events
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((buttons) =>
  buttons.addEventListener("click", () => handleSkip(button))
);

ranges.forEach((range) =>
  range.addEventListener("change", () => handleRangeUpdate(range))
);

["mousedown", "click"].forEach((command) =>
  progress.addEventListener(command, (e) => scrub(e))
);

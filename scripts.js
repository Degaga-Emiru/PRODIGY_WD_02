let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(runStopwatch, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  timer = null;
  display.innerText = "00:00:00";
  laps.innerHTML = '';
  lapCount = 1;
});

document.getElementById("lap").addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = `Lap ${lapCount++}: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  laps.appendChild(li);
});

function runStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(unit) {
  return unit < 10 ? '0' + unit : unit;
}

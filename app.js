const clock = document.getElementById("clock");
const clockContainer = document.getElementById("clockContainer");

function digitalClock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";
  if (hours > 12) {
    meridian = "PM";
    hours -= 12;
  }

  if (hours >= 7 && hours <= 12 && meridian == "AM") {
    clockContainer.style.background = "rgb(163, 239, 245)";
    clockContainer.style.border = "rgb(163, 239, 245)";
    clock.classList.add("morning");
  } else if (hours >= 1 && hours <= 6 && meridian == "PM") {
    clockContainer.style.background = "rgb(241, 146, 36)";
    clockContainer.style.border = "rgb(241, 146, 36)";
    clock.classList.add("afternon");
  }
  clock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridian;
}

setInterval(() => {
  digitalClock();
}, 1000);

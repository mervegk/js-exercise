let countDownDate = new Date("Dec 2, 2025 15:37:25").getTime();

let remaining = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = hours
  document.getElementById('minutes').innerHTML = minutes
  document.getElementById('seconds').innerHTML = seconds

  if (distance < 0) {
    clearInterval(remaining);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);

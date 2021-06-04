const countdown = () => {
  let countDate = new Date("December 31, 2022 00:00:00").getTime();
  let now = new Date().getTime();
  let gap = countDate - now;

  // Time variables
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate
  const textDays = Math.floor(gap / day);
  const textHours = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);

  document.querySelector(".days").innerHTML = textDays;
  document.querySelector(".hours").innerHTML = textHours;
  document.querySelector(".minutes").innerHTML = textMinutes;
  document.querySelector(".seconds").innerHTML = textSeconds;
};

setInterval(countdown, 1000);

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.style.display = "none";

  const welcome = document.querySelector(".welcome");
  welcome.style.display = "block";

  const backButton = document.querySelector(".back-button");
  backButton.addEventListener("click", () => {
    container.style.display = "block";
    welcome.style.display = "none";
  });
});

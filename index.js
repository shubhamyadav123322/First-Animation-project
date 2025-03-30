const rocket = document.getElementById("rocket");
const altitudeDisplay = document.getElementById("altitude");
const speedDisplay = document.getElementById("speed");
const phaseDisplay = document.getElementById("phase");
const launchSound = document.getElementById("launchSound");
const landSound = document.getElementById("landSound");
let isFlying = false;

function updateInfo(altitude, speed, phase) {
  altitudeDisplay.textContent = altitude;
  speedDisplay.textContent = speed;
  phaseDisplay.textContent = phase;
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function launchAndLand() {
  if (isFlying) return;
  isFlying = true;

  rocket.style.transform = "translateY(-80vh)";
  updateInfo(0, 0, "Launching");
  playSound(launchSound);

  setTimeout(() => updateInfo(1000, 200, "Ascending"), 500);
  setTimeout(() => updateInfo(5000, 500, "Max Altitude"), 1000);
  setTimeout(() => updateInfo(3000, 300, "Descending"), 1500);
  setTimeout(() => {
    rocket.style.transform = "translateY(0)";
    updateInfo(1000, 100, "Landing");
    playSound(landSound);
  }, 2000);
  setTimeout(() => updateInfo(0, 0, "Landed"), 3500);
  setTimeout(() => {
    updateInfo(0, 0, "Pre-Launch");
    isFlying = false;
  }, 4000);
}
document.addEventListener("click", launchAndLand);

const rocket = document.getElementById("rocket");
const altitudeDisplay = document.getElementById("altitude");
const speedDisplay = document.getElementById("speed");
const phaseDisplay = document.getElementById("phase");
const launchSound = document.getElementById("launchSound");
const landSound = document.getElementById("landSound");

function updateInfo(altitude, speed, phase) {
  altitudeDisplay.textContent = altitude;
  speedDisplay.textContent = speed;
  phaseDisplay.textContent = phase;
}

function playSound(sound) {
  sound.currentTime = 0; // Reset to start
  sound.play();
}

function launchAndLand() {
  // Launch phase
  rocket.style.transform = "translateY(-80vh)";
  updateInfo(0, 0, "Launching");
  playSound(launchSound);

  // Simulate altitude and speed increase
  setTimeout(() => updateInfo(1000, 200, "Ascending"), 500);
  setTimeout(() => updateInfo(5000, 500, "Max Altitude"), 1000);
  setTimeout(() => updateInfo(3000, 300, "Descending"), 1500);

  // Landing phase
  setTimeout(() => {
    rocket.style.transform = "translateY(0)";
    updateInfo(1000, 100, "Landing");
    playSound(landSound);
  }, 2000);

  // Reset to pre-launch
  setTimeout(() => updateInfo(0, 0, "Landed"), 3500);
  setTimeout(() => updateInfo(0, 0, "Pre-Launch"), 4000);

  // Repeat the animation
  setTimeout(launchAndLand, 4500);
}

// Start the animation
document.addEventListener("click", launchAndLand());

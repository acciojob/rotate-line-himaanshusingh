//your JS code here. If required.
// Get the line element
const line = document.getElementById("line");

// Initialize rotation angle
let rotationAngle = 0;

// Function to update the rotation
function rotateLine() {
  rotationAngle += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
}

// Set initial position and transformation
line.style.transform = "translate(-50%, -50%) rotate(0deg)";

// Start the rotation interval
setInterval(rotateLine, 20);

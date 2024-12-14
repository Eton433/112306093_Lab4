// Select all drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Add click event listener to all buttons
drumButtons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonInnerHTML = button.innerHTML;
    playSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
});

// Add keypress event listener to the document
document.addEventListener("keydown", event => {
  const keyPressed = event.key.toLowerCase(); // Convert to lowercase to match button classes
  playSound(keyPressed);
  addAnimation(keyPressed);
});

// Function to play sound based on the key
function playSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      break;
    default:
      console.log("Invalid key:", key);
      return; // Exit function for invalid keys
  }
  audio.play();
}

// Function to add animation to the active button
function addAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  if (activeButton) {
    activeButton.classList.add("pressed");

    // Remove the "pressed" class after 100ms
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

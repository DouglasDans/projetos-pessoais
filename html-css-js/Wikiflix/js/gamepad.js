const rAF = window.mozRequestAnimationFrame || window.requestAnimationFrame; 

const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

window.addEventListener('gamepadconnected', function(event) {
    console.log(event);
  	updateLoop();
}); 

let current = 0;

function updateLoop() {
  const gamepad = navigator.getGamepads()[0]
  const gamepadBumperL = gamepad.buttons[4]
  const gamepadBumperR = gamepad.buttons[5]
  
  if (gamepadBumperL.pressed) { prevItem(current) }
  if (gamepadBumperR.pressed) { nextItem(current) }
  
  setTimeout(() => rAF(updateLoop), 100)
}

function prevItem(index) {
  current = (index - 1) % focusableElements.length
  focusableElements[current].focus()
}

function nextItem(index) {
  current = (index + 1) % focusableElements.length
  focusableElements[current].focus()
}
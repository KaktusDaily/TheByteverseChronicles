// Set up the basic page styling and elements
document.body.style.margin = '0';
document.body.style.height = '100vh';
document.body.style.backgroundColor = 'white';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';

// Create the red square element
const square = document.createElement('div');
square.style.width = '100px';
square.style.height = '100px';
square.style.backgroundColor = 'red';
square.style.position = 'absolute';

// Append the square to the body
document.body.appendChild(square);

// Animation function for spinning
let angle = 0;

function spinSquare() {
    angle += 1; // Increase the angle
    square.style.transform = `rotate(${angle}deg)`; // Apply rotation
    requestAnimationFrame(spinSquare); // Keep the animation running
}

// Start the spinning animation
spinSquare();


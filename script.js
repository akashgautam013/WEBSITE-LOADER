const $percent = document.querySelector( '.percent');
const $circle = document.querySelector( '.circle');
let load = 0;
// Function to update load and circle style
function update() {
    // Increase load by 1 if it's less than 100
    load += load < 100;
    // Update percentage display
    $percent.innerHTML=load;
    // Update circle style with conic gradient
    $circle.style.background = 
    'conic-gradient(from 0deg at 50deg 50%, #6f7bf7 0%, #7bf8f4 ${load}%, #101012 ${load}%';
}
setInterval(update, 100 )
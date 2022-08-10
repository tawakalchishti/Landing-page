// Get DOM Elements
const menuToggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");



// Add Event Listeners
// 1. Listen for click on toggle button 
menuToggle.addEventListener('click',() => {
    document.body.classList.toggle('show-nav')
})

// 2 listen for click on open button
open.addEventListener('click', () => modal.classList.add ('show-modal'));
// 3 listen for click on close button
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => {
    e.target == modal ? modal.classList.remove('show-modal') : false
});
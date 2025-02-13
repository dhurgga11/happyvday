let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const dotsContainer = document.querySelector('.dots');

// Create dots dynamically
function createDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.addEventListener('click', () => showSlide(index)); // Allow clicking on dots to navigate
        dotsContainer.appendChild(dot);
    });
}

function showSlides() {
    // Hide all images
    slides.forEach(slide => slide.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].classList.add('active');  // Show the current slide

    // Update active dot
    const dots = dotsContainer.querySelectorAll('div');
    dots.forEach((dot, index) => {
        dot.classList.remove('active-dot');
        if (index === slideIndex - 1) {
            dot.classList.add('active-dot');
        }
    });
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Show a specific slide
function showSlide(index) {
    slideIndex = index + 1;  // Adjust for zero-based index
    showSlides();
}

createDots();  // Create dots when the page loads
showSlides();  // Start the slide show



document.addEventListener('DOMContentLoaded', function() {
    const eventDate = new Date('2025-06-01T00:00:00'); // Set the event date (e.g., anniversary)
    
    function updateCountdown() {
        const now = new Date();
        const timeRemaining = eventDate - now;
        
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        const timer = document.getElementById('timer');
        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display the timer immediately
});


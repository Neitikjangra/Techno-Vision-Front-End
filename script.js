
// Optional JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded');
});

  // Optional JavaScript for additional interactivity
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.research-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `rotateY(${x * 15}deg) rotateX(${y * -15}deg) translateZ(20px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
        });
    });
});





 // Optional JavaScript for additional interactivity
 document.addEventListener('DOMContentLoaded', function () {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoTitle = card.querySelector('h3').textContent;
            alert(`You clicked on: ${videoTitle}`);
        });
    });
});


    // JavaScript for Interactivity(Smooth scrolling for anchor links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

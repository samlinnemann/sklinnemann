

  // Function to setup image overlay
  function setupImageOverlay() {
      const overlay = document.getElementById('overlay');
      const overlayImage = document.getElementById('overlay-image');
      const close = document.getElementById('close');
      const galleryItems = document.querySelectorAll('.gallery-item');
  
      // Open overlay when a gallery image is clicked
      galleryItems.forEach(item => {
          item.addEventListener('click', function() {
              overlay.style.display = 'flex'; 
              overlayImage.src = this.src; 
          });
      });
  
      // Close overlay when the close button is clicked
      close.addEventListener('click', function() {
          overlay.style.display = 'none';
      });
  
      // Close overlay when clicking outside the image
      overlay.addEventListener('click', function(event) {
          if (event.target === overlay) {
              overlay.style.display = 'none';
          }
      });
  }

  function spinningElement() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('#egg', { xPercent: -50 });

    gsap.to('#egg', {
        rotation: 360 * 4, // Adjust this for more or fewer spins during the scroll
        ease: 'none',
        scrollTrigger: {
            trigger: "#wrap",
            pin: true,
            scrub: 0.2,
            start: 'top top',
            end: '+=3000', // Adjust scroll distance for faster or slower spinning
        }
    });
}



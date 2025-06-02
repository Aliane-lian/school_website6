
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  

  let currentIndex = 0;
  const images = document.querySelectorAll('.hero img');
  const totalImages = images.length;
  
  function showNextImage() {
    images[currentIndex].style.opacity = 0; 
    currentIndex = (currentIndex + 1) % totalImages; 
    images[currentIndex].style.opacity = 1; 
  }
  

  images[currentIndex].style.opacity = 1;
  setInterval(showNextImage, 3000); 
  
  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all the fields.');
      return;
    }
  
    
    alert('Your message has been sent successfully!');
    
    this.reset();
  });
  
  document.querySelector('.subscribe-box button').addEventListener('click', function (e) {
    e.preventDefault();
  
    const emailInput = document.querySelector('.subscribe-box input').value;
  
    if (!emailInput) {
      alert('Please enter a valid email to subscribe!');
      return;
    }
  
    alert('Thank you for subscribing!');
    document.querySelector('.subscribe-box input').value = ''; 
  });
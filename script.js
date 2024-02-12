// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  
      // Highlight active section in the menu
      document.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  
  // Highlight current section in the menu when scrolling
  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(section => {
      var top = section.offsetTop - 50;
      var bottom = top + section.offsetHeight;
      var scrollPosition = window.scrollY;
  
      if (scrollPosition >= top && scrollPosition < bottom) {
        var id = section.getAttribute('id');
        document.querySelectorAll('a').forEach(a => {
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          } else {
            a.classList.remove('active');
          }
        });
      }
    });
  });
   
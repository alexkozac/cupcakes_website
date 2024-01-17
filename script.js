function navigateTo(link) {
    window.location.href = link;
  }

  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.st');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        
        navLinks.forEach(link => link.classList.remove('active'));

        
        link.classList.add('active');

        
        const category = link.getAttribute('data-category');

       
        sections.forEach(section => {
          if (category === 'all' || section.getAttribute('data-category') === category) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
      });
    });
  });


 
  function buyCupcake() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput.value;
    // You can now use the 'quantity' variable to handle the purchase logic
    alert(`Cupcake bought! Quantity: ${quantity}`);
  }


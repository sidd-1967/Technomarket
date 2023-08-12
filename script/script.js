//  Readmore Functionality for Product Description
$(document).ready(function () {
  $('.read-more').click(function (event) {
    event.preventDefault();
    
    // Find the parent product-card of the clicked read-more button
    const productCard = $(this).closest('.product-card');
    
    // Find the .truncate-text element within the specific product-card
    const paragraph = productCard.find('.truncate-text');
    
    if (paragraph.hasClass('show-full-text')) {
      // If paragraph is expanded, collapse it
      paragraph.removeClass('show-full-text');
      $(this).text('Read More');
    } else {
      // If paragraph is collapsed, expand it
      paragraph.addClass('show-full-text');
      $(this).text('Read Less');
    }
  });
});


//  Contact us Submit Sweet Alert

// Select the form and the submit button
const contactForm = document.querySelector('.contact-form form');
const submitButton = document.getElementById('submit-button');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Show SweetAlert after the form is submitted
  Swal.fire({
    icon: 'success',
    title: 'Thank You!',
    text: 'Your request has been submitted successfully.',
    // confirmButtonText: 'OK'
  });

  // You can also reset the form fields if needed
  contactForm.reset();
});

// Alternatively, you can use the submit button click event
submitButton.addEventListener('click', function () {
  // Trigger the form's submit event
  contactForm.submit();
});


//  Readmore Functionality for Product Description on Home page


// document.addEventListener('DOMContentLoaded', function () {
//     const readMoreLinks = document.querySelectorAll('.read-more');

//     readMoreLinks.forEach((link) => {
//       link.addEventListener('click', function (event) {
//         event.preventDefault();
//         const paragraph = this.previousElementSibling;

//         if (paragraph.classList.contains('show-full-text')) {
//           // If paragraph is expanded, collapse it
//           paragraph.classList.remove('show-full-text');
//           this.textContent = 'Read More';
//         } else {
//           // If paragraph is collapsed, expand it
//           paragraph.classList.add('show-full-text');
//           this.textContent = 'Read Less';
//         }
//       });
//     });
//   });
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


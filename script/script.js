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



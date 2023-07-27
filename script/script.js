//  Readmore Functionality for Product Description on Home page


document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const paragraph = this.previousElementSibling;

        if (paragraph.classList.contains('show-full-text')) {
          // If paragraph is expanded, collapse it
          paragraph.classList.remove('show-full-text');
          this.textContent = 'Read More';
        } else {
          // If paragraph is collapsed, expand it
          paragraph.classList.add('show-full-text');
          this.textContent = 'Read Less';
        }
      });
    });
  });

  
  


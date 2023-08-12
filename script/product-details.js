// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the request method and URL
xhr.open("GET", "allproducts.html");

// Send the request
xhr.send();

// Handle the response
xhr.onload = function() {
  // Get the response data
  var responseData = xhr.responseText;

  // Parse the response data as HTML
  var htmlData = document.querySelector("html");
  var productCards = htmlData.querySelectorAll(".product-card");
  var productDetails = [];

  for (var i = 0; i < productCards.length; i++) {
    // Get the product ID from the product card
    var productId = productCards[i].getAttribute("id");

    // Get the product name from the product card
    var productName = productCards[i].querySelector("h3").textContent;

    // Get the product description from the product card
    var productDescription = productCards[i].querySelector("p").textContent;

    // Create a product details object
    var productDetailsObject = {
      id: productId,
      name: productName,
      description: productDescription,
    };

    // Add the product details object to the array
    productDetails.push(productDetailsObject);
  }

  // Send the product details to the product-details.html page
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "product-details.html");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    productDetails: productDetails,
  }));
};

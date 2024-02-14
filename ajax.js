$(document).ready(function () {
    const shopContainer = $('#shopContainer');
    
  
    // Fetch data from the Fake Store API using jQuery AJAX
    $.ajax({
        url: "http://159.65.21.42:9000/products",
        type: "GET",
        success: function (data) {
          $.each(data, function (index, product) {
            if (product.category === "sierraDesigns") {
              var Productitem = `
                <div class="product">
                  <img class="product-image" src="http://159.65.21.42:9000${product.image}" alt="">
                  
                  <h3>${product.name}</h3>
                  <p>$${product.price}</p>
                  
                  
                </div>
              `;
      
              $(".product-body").append(Productitem);
            }
          });
        }

});
});
  
    // Function to create a product item
//     function createProductItem(product) {
//       const productItem = $('<div>').addClass('product');
  
//       const productImage = $('<img>').attr('src', product.image);
//       productItem.append(productImage);
  
//       const productTitle = $('<h3>').addClass('product-title').text(product.title);
//       productItem.append(productTitle);
  
//       const productPrice = $('<p>').addClass('product-price').text(`$${product.price.toFixed(2)}`);
//       productItem.append(productPrice);
  
//       const productCategory = $('<p>').addClass('product-category').text(`Category: ${product.category}`);
//       productItem.append(productCategory);
  
//       // Add "Add to Cart" button
//       const addToCartButton = $('<button>').addClass('add-to-cart-btn').text('Add to Cart');
//       addToCartButton.on('click', function () {
//         addToCart(product);
//       });
//       productItem.append(addToCartButton);
  
//       return productItem;
//     }
  
//     // Function to handle "Add to Cart" button click
//     function addToCart(product) {
//       // Replace this with your actual logic for adding the product to the cart
//       console.log(`Added ${product.title} to the cart`);
//     }
//   });
  
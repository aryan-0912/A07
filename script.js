let searchInput = document.getElementById("searchInput");
let products = document.querySelectorAll(".product");
let categories = document.querySelectorAll(".category");
let noResults = document.getElementById("noResults");

let selectedCategory = "All";

// Filter products
function filterProducts() {
    let searchText = searchInput.value.toLowerCase();
    let visibleCount = 0;

    products.forEach(function(product) {
        let name = product.querySelector("h3")
                          .textContent.toLowerCase();

        let category = product.dataset.category;

        let matchesSearch = name.includes(searchText);

        let matchesCategory =
            selectedCategory === "All" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            product.style.display = "";
            visibleCount++;
        } else {
            product.style.display = "none";
        }
    });

    // Show message if nothing matches
    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

// Search while typing
searchInput.addEventListener("input", filterProducts);

// Category buttons
categories.forEach(function(button) {
    button.addEventListener("click", function() {

        selectedCategory = button.dataset.category;

        // Remove active class from all buttons
        categories.forEach(function(categoryButton) {
            categoryButton.classList.remove("active");
        });

        // Highlight selected category
        button.classList.add("active");

        // Update product display
        filterProducts();
    });
});

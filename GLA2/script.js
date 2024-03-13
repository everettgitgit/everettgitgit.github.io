document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    document.getElementById('sortPrice').addEventListener('change', sortAndDisplayProducts);
    document.getElementById('filterCategory').addEventListener('change', sortAndDisplayProducts);
});

let products = [];

const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
    displayProducts(products);
};

const sortAndDisplayProducts = () => {
    let sortedProducts = [...products];
    const sortValue = document.getElementById('sortPrice').value;
    const filterValue = document.getElementById('filterCategory').value;

    if (sortValue !== 'default') {
        sortedProducts = sortedProducts.sort((a, b) => sortValue === 'asc' ? a.price - b.price : b.price - a.price);
    }

    if (filterValue !== 'all') {
        sortedProducts = sortedProducts.filter(product => product.category === filterValue);
    }

    displayProducts(sortedProducts);
};

const displayProducts = (products) => {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear current products

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.category}</p>
            <p>$${product.price}</p>
        `;
        productList.appendChild(productElement);
    });
};

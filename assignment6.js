
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// 1. forEach() - Print all products
console.log("-- All Products (forEach) --");

products.forEach((product) => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// 2. filter() - Find products under $50
console.log("\n-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter((product) => {
    return product.price < 50;
});

console.log(filteredProducts);

// 3. map() - Create formatted product tags
console.log("\n-- Mapped Product Tags (map) --");

const mappedProducts = products.map((product) => {
    return `${product.name.toUpperCase()} costs $${product.price}`;
});

console.log(mappedProducts);

module.exports = class Product {
    static products = [new Product(1, "Charger", "Surface pro 7", 40), 
                        new Product(2, "T-Shirt", "Clothing", 25.50), 
                        new Product(3, "Pizza", "Fast Food", 6),
                        new Product(4, "Tesla Truck", "Tesla", 80000.99)];

    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    save() {
        Product.products.push(this);
    }

    static getProduct(id) {
        return Product.products.find((pro) => pro.id == id);

    }

    static getAll() {
        return Product.products;
    }
}
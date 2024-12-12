import { Product } from "./Product";

export class SimpleDataSource{
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1, "Samsung S10", "Telefon", 1500),
            new Product(2, "Iphone 12", "Telefon", 3000),
            new Product(3, "Xiaomi T10", "Telefon",1000),
            new Product(4, "Samsung Note 10", "Telefon",1700),
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S10", "Telefon", 1500), new Product_1.Product(2, "Iphone 12", "Telefon", 3000), new Product_1.Product(3, "Xiaomi T10", "Telefon", 1000), new Product_1.Product(4, "Samsung Note 10", "Telefon", 1700));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;

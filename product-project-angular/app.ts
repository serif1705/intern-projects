import { Product } from './Product';
import { ProductService} from './ProductService';


let _productService = new ProductService();

let result;

let p =new Product();

p.name = "Iphone 13";
p.price = 4000;
p.category = "Telefon";
p.id=5;

_productService.saveProduct(p);

//result = _productService.getProducts();
result = _productService.getById(5);
result = _productService.getProducts();

console.log(result);
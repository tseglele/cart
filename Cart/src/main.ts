import { Product, IProduct } from "./interfaces/Product";
import { Cart } from "./interfaces/Cart";
import { InMemoryStorage } from "./interfaces/Storable";


const storage = new InMemoryStorage();


const cart = new Cart(storage);


const muffin: IProduct = new Product("Muffin", 2.5);
const cupcake: IProduct = new Product("Cupcake", 3.0);
const cookie: IProduct = new Product("Cookie", 1.5);


cart.addProduct(muffin);
cart.addProduct(cupcake);
cart.addProduct(cookie);


console.log("Produits dans le panier :");
cart.listProducts().forEach(product => console.log(`${product.name}: ${product.price} €`));


console.log(`Total du panier : ${cart.getTotalPrice()} €`);


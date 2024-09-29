
import { IProduct } from "./Product";
import { Storable } from "./Storable";


export interface ICart {
    addProduct(product: IProduct): void;
    removeProduct(product: IProduct): void;
    getTotalPrice(): number;
    listProducts(): IProduct[];
}

export class Cart implements ICart {
    private storage: Storable;

    constructor(storage: Storable) {
        this.storage = storage;
    }

    addProduct(product: IProduct): void {
        this.storage.add(product);
    }

    removeProduct(product: IProduct): void {
        this.storage.remove(product);
    }

    getTotalPrice(): number {
        return this.storage.getAll().reduce((total, product) => total + product.price, 0);
    }

    listProducts(): IProduct[] {
        return this.storage.getAll();
    }
}

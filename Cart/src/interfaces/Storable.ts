
import { IProduct } from "./Product";



export interface Storable {
    add(item: IProduct): void;
    remove(item: IProduct): void;
    getAll(): IProduct[];
}

export class InMemoryStorage implements Storable {
    private storage: IProduct[] = [];

    add(item: IProduct): void {
        this.storage.push(item);
    }

    remove(item: IProduct): void {
        this.storage = this.storage.filter(storedItem => storedItem !== item);
    }

    getAll(): IProduct[] {
        return this.storage;
    }
}


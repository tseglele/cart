
export interface IProduct {
     name:string ,
      price:number
}
export class Product implements IProduct {

    name:string 
    price:number
        
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
        getName(): string { return this.name }
        setName(name: string): void { this.name = name }

        getPrice(): number { return this.price }
        setPrice(price: number) {
            if (price < 0) {
                throw new Error("Price cannot be negative");
            }
            this.price = price;
        }
 }






 
export class Product {

    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number,
    ){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
}




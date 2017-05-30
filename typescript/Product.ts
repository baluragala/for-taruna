class Product {

    private _title: string;
    private _desc: string;
    private _price: number;

    constructor(title: string, desc: string, price: number) {
        this.title = title;
        this.price = price;
        this.desc = desc;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get desc(): string {
        return this._desc;
    }

    set desc(value: string) {
        this._desc = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

}

let apple = new Product('Apple','Apples from washigton',20);
console.log(apple.title);
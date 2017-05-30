var Product = (function () {
    function Product(title, desc, price) {
        this.title = title;
        this.price = price;
        this.desc = desc;
    }
    Object.defineProperty(Product.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (value) {
            this._desc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var apple = new Product('Apple', 'Apples from washigton', 20);
console.log(apple.title);

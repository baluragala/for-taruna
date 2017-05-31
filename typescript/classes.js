var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Course = (function () {
    /* private title: string;
     private desc: string;
     private fee: number;
     */
    function Course(title, desc, fee) {
        this.title = title;
        this.desc = desc;
        this.fee = fee;
        this.Title = title;
        this.Fee = fee;
        this.Desc = desc;
    }
    Object.defineProperty(Course.prototype, "Desc", {
        get: function () {
            return this.desc;
        },
        set: function (value) {
            this.desc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "Title", {
        get: function () {
            return this.title;
        },
        set: function (value) {
            this.title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "Fee", {
        get: function () {
            return this.fee;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Invalid fee');
            this.fee = value;
        },
        enumerable: true,
        configurable: true
    });
    Course.prototype.toString = function () {
    };
    return Course;
}());
var SpecialCourse = (function (_super) {
    __extends(SpecialCourse, _super);
    function SpecialCourse(title, desc, fee, specialType) {
        var _this = _super.call(this, title, desc, fee) || this;
        _this.specialType = specialType;
        _this.specialType = specialType;
        return _this;
    }
    return SpecialCourse;
}(Course));
var c = new SpecialCourse('Angular', 'by google', 500, 'ONLINE');
c.Title = 'Angular';
c.Fee = 10;

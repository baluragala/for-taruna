class Course {
    /* private title: string;
     private desc: string;
     private fee: number;
     */
    constructor(private title: string, private desc: string, private fee: number) {
        this.Title = title;
        this.Fee = fee;
        this.Desc = desc;
    }

    get Desc() {
        return this.desc;
    }

    set Desc(value: string) {
        this.desc = value;
    }

    get Title() {
        return this.title;
    }

    set Title(value: string) {
        this.title = value;
    }

    get Fee() {
        return this.fee;
    }

    set Fee(value: number) {
        if (value < 0)
            throw new Error('Invalid fee');
        this.fee = value;
    }

    toString() {

    }
}


class SpecialCourse extends Course {
    constructor(title: string, desc: string, fee: number, public specialType: string) {
        super(title, desc, fee);
        this.specialType = specialType;
    }
}

let c = new SpecialCourse('Angular', 'by google', 500, 'ONLINE');
c.Title = 'Angular';
c.Fee = 10;
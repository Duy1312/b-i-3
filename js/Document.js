export class Document {
    id;
    name;
    author;
    price;
    publishDate;

    constructor(id,name,author,price,publishDate){
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate
    }

    get info() {
        return `
        hehe ${this.id}
        haha ${this.name}
        tác giả ${this.author}
        giá ${this.price}
        ngày ${this.publishDate}
        `
    }

    set info(data) {
        if (isNaN(data)){
            console.log('nhập data');
        } else {
            this.publishDate = data;
        }
    }
}

class EBook extends Document {
    discount;
    constructor(id,name,author,price,publishDate,discount){
        super (id,name,author,price,publishDate)
        this.discount = discount
    }

    get info() {
        return `
        thông tin sách
        id là ${this.id}
        tên ${this.name}
        tác giả ${this.author}
        giá ${this.discount}
        ngày ${this.publishDate}

        `
    }
}

class HardCopy extends Document {
    static source = source;

    get info() {
        return `
        tên sách sao chép ${this.source}
        tên ${this.name}
        `
    }
}


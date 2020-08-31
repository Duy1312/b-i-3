class Destination {
    name;
    images;
    dateModified;

    constructor(name) {
        this.name = name;
        this.images = []
        this.dateModified = new Date().toISOString();
    }

    set newImage(image) {
        this.images.push(image);
    }

    get info() {
        return `
            Dia diem: ${this.name},
            Anh dia diem: ${this.images},
            Thoi gian cap nhat vao luc: ${this.dateModified}
        `;
    }
}

export {Destination};
import ManageContactsCase from "./ManageContactsCase";

export default class ManageContact {
    id;
    name;
    phoneNumber;
    company;

    constructor( name, phoneNumber, company){
        this.id = uuid.v4();
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;

    }
    get info(){
        return `
        Id: ${this.id},
        Name: ${this.name},
        PhoneNumber: ${this.phoneNumber},
        Company: ${this.company},
        `
    }
    set info(data) {
        this.name == data.name;
        this.phoneNumber =  data.phoneNumber;
        this.company = data.company;
    };

}


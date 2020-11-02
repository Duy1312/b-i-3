import ManageContact  from './ManageContacts.js' 

export default class ManageContactsCase {
    id;
    name;
    manageContacts;
    company;
    phoneNumber;

    constructor(name,company,phoneNumber){
        this.id = uuid.v4();
        this.name = name;
        this.company = company;
        this.phoneNumber = phoneNumber;
        this.manageContacts = [];
    }

    addContact (manageContact){
        if (manageContact instanceof ManageContact){
            this.manageContacts.push(manageContact)
        } else {
            console.log('lỗi');
        }
    }

    findContact (name) {
        let result = this.manageContacts.filter(function(manageContact){
            return manageContact.name == name || manageContact.phoneNumber == phoneNumber;
        })
    }
    showContact(){
        this.manageContacts.forEach(function(manageContact){
            console.log(manageContact.info);
        })
    }

    deleteContact(){
        let foundIndex = this.manageContacts.findIndex(function(manageContact){
            return manageContact.id == id;
        });

        if (foundIndex >=0){
            this.manageContacts.splice(foundIndex,1)
        }
    }

    uplateContact(id, data){
        let found = this.manageContacts.find(function(manageContact){
            return manageContact.id == id;
        });
        if (found != null){
            found.info = data;
        }
    }

}


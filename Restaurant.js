import {Destination} from "./Destination.js"
class Restaurant extends Destination {
    bufferprice;
    constructor(name,bufferprice){
        super(name);
        this.bufferprice = bufferprice;
    }
}
export{Restaurant}
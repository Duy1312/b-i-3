import{Destination} from "./Destination";
import{Museum} from "./Museum";
import{Restaurant} from "./Restaurant";
import{Park} from "./Park";
class DestinationList {
   constructor() {
    this.destinations =[];
    this.dateModified = new Date().toISOString();
}

addDestination(destination) {
    if (destination instanceof Destination) {
        this.destinations.push(destination);
    }
    else{
        console.log("Nhập sai");
    }
    // hỏi thêm nếu truyền instance của Park, Museum, Restaurant thì có được không? Vì sao?
    // trả lời: được vì cả 3 cái đều đc extends từ Destination
}
findDestination(name){
    console.log(`Danh sach cac dia diem co ten  ${name}:`)
    for (let i=0; i < this.destinations.length; i++){
        if (this.destinations[i].name === name){
            console.log(this.destinations[i]);
        }
    }
}
get totalPrice(){
    let totalPrice = 0;
    for (let destination of this.destinations){
        if (destination instanceof Park){
            totalPrice += destination.ticketPrice;
        }
        else if (destination instanceof Museum ){
            totalPrice += destination.ticketPrice;
        }
        else if (destination instanceof Restaurant){
            totalPrice += destination.bufferPrice;
        }
    }
    return totalPrice
    }
}

let hanoipark = new Park("Ha Noi Park", 300000);
hanoipark.newImage = 'https://tnktravel-cfgkt0n8kmqr4w4.stackpathdns.com/wp-content/uploads/2017/10/thu-le-park.jpg';
console.log(hanoipark.info);
let hanoimuseum = new Museum("Ha Noi Museum", 300000);
hanoimuseum.newImage = "https://hanoifreelocaltours.com/wp-content/uploads/2018/01/the-hanoi-museum-hanoi-9110.jpg";
console.log(hanoimuseum.info);


let hanoirestaurant = new Restaurant("Nhà hàng đắt đỏ", 300000);
hanoirestaurant.newImage = "https://cdn.tasteatlas.com/images/restaurants/27ac5710e6264e2b855e4d3f5350f12f.jpg?w=600&h=450";
console.log(hanoirestaurant.info);

let tour = new DestinationList();

tour.addDestination(hanoipark);
tour.addDestination(hanoimuseum);
tour.addDestination(hanoirestaurant);

tour.findDestination( "Hà Nội");

tour.totalPrice;
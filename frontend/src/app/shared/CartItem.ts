import { Film } from "./models/Film";

export class CartItem{
    constructor(public film:Film){
    }
    quantity:number = 1;
    price: number =this.film.price;
}
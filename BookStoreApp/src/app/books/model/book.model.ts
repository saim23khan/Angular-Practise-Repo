import { PriceModel } from "./price.model";

export interface BooksModel{
    id:number,
    title:string,
    totalPages:number,
    auther:string,
    price: PriceModel
}
import { PriceModel } from "./price.model";

export class BooksModel{
    id!:number;
    title!:string;
    totalPages!:number;
    auther!:string;
    price!: PriceModel;
}
export interface Products{
    pid?: number;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    quantity?: number;
    createdOn?: string;
    cid?: number;
    productStatus?: string;
    cidNavigation?: any;
    tempUserOrders?: any[];
    userOrders?: any[];
}

export interface ProductsModel{
    Data:Products[];
    errorMessage:string;
}
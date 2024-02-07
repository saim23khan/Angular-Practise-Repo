import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsModel } from "../../_model/products";

const getProductState = createFeatureSelector<ProductsModel>('products');

export const getProductsList = createSelector(getProductState,(state) => {
    return state.Data;
});
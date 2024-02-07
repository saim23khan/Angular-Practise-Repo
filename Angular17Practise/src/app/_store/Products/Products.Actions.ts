import { createAction, props } from "@ngrx/store";
import { Products } from "../../_model/products";

export const LOAD_PRODUCTS = '[products] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[products] Load Products Success';
export const LOAD_PRODUCTS_FAILURE = '[products] Load Products Failure';

export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS,props<{Data:Products[]}>())
export const loadProductsFailure = createAction(LOAD_PRODUCTS_FAILURE,props<{errorMessage:string}>());
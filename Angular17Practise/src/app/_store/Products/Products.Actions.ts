import { createAction, props } from "@ngrx/store";
import { Products } from "../../_model/products";

export const LOAD_PRODUCTS = '[products] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[products] Load Products Success';
export const LOAD_PRODUCTS_FAILURE = '[products] Load Products Failure';

export const ADD_PRODUCTS = '[products] Add Products';
export const ADD_PRODUCTS_SUCCESS = '[products] Add Products Success';

export const UPDATE_PRODUCTS = '[products] Update Products';
export const UPDATE_PRODUCTS_SUCCESS = '[products] Update Products Success';

export const DELETE_PRODUCTS = '[products] Delete Products';
export const DELETE_PRODUCTS_SUCCESS = '[products] Delete Products Success';

export const SHOW_ALERT = '[products] Show Alert';


export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS,props<{Data:Products[]}>())
export const loadProductsFailure = createAction(LOAD_PRODUCTS_FAILURE,props<{errorMessage:string}>());

export const addProducts = createAction(ADD_PRODUCTS,props<{inputData:Products}>());
export const addProductsSuccess = createAction(ADD_PRODUCTS_SUCCESS);

export const updateProducts = createAction(UPDATE_PRODUCTS,props<{inputData:Products}>());
export const updateProductsSuccess = createAction(UPDATE_PRODUCTS_SUCCESS);

export const deleteProducts = createAction(DELETE_PRODUCTS,props<{id:number}>());
export const deleteProductsSuccess = createAction(DELETE_PRODUCTS_SUCCESS);

export const showAlert = createAction(SHOW_ALERT,props<{message:string,resptype:string}>());
export const emptyAction = createAction('emptyAction');
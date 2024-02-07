import { createReducer, on } from "@ngrx/store";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./Products.Actions";
import { productState } from "./Products.State";

const _ProductReducer = createReducer(productState,
    on(loadProductsSuccess,(state,action) => {
        return {
            ...state,
            Data:action.Data,
            errorMessage:''
        }
    }),
    on(loadProductsFailure,(state,action) => {
        return {
            ...state,
            Data:[],
            errorMessage:action.errorMessage
        }
    })
);

export function ProductReducer(state:any, action:any) {
  return _ProductReducer(state, action);
}
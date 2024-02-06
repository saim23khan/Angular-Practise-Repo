import { createReducer } from "@ngrx/store";
import { loadProducts } from "./Products.Actions";

const _ProductReducer = createReducer(loadProducts);

export function ProductReducer(state:any, action:any) {
  return _ProductReducer(state, action);
}
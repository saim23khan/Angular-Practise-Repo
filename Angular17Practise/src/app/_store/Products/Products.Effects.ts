import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';// Import ProductService
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './Products.Actions';
import { MasterService } from '../../_service/master.service';

@Injectable()
export class ProductEffects{
    constructor(private actions$:Actions,private service:MasterService){}

    loadCustomer$ = createEffect(() => 
        this.actions$.pipe(
        ofType(loadProducts),
        exhaustMap((action) => {
            return this.service.getAllProducts().pipe(
                map((data:any) => loadProductsSuccess({ Data:data["Data"] })),
                catchError((error) => of(loadProductsFailure({ errorMessage: error })))
                )
            })
        )
    );
}
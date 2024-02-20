import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';// Import ProductService
import { addProducts, addProductsSuccess, deleteProducts, deleteProductsSuccess, emptyAction, loadProducts, loadProductsFailure, loadProductsSuccess, showAlert, updateProducts, updateProductsSuccess } from './Products.Actions';
import { MasterService } from '../../_service/master.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ProductEffects{
    constructor(private actions$:Actions,private service:MasterService,private _matSnackBar:MatSnackBar){}

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

    addPrdouct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addProducts),
            switchMap((action) => {
                return this.service.postProducts(action.inputData).pipe(
                    switchMap(() => {
                        return of(addProductsSuccess(),showAlert({ message: 'Product Added Successfully', resptype: 'pass' }));
                    }),
                    catchError((error) => of(showAlert({ message: error, resptype: 'fail' })))
                )
            })
        )
    );

    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateProducts),
            switchMap((action) => {
                return this.service.updateProducts(action.inputData).pipe(
                    switchMap(() => {
                        return of(updateProductsSuccess(),showAlert({ message: 'Product Updated Successfully', resptype: 'pass' }));
                    }),
                    catchError((error) => of(showAlert({ message: error, resptype: 'fail' })))
                )
            })
        )
    );

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteProducts),
            switchMap((action) => {
                return this.service.deleteProducts(action.id).pipe(
                    switchMap(() => {
                        return of(deleteProductsSuccess,showAlert({ message: 'Product Deleted Successfully', resptype: 'pass' }));
                    }),
                    catchError((error) => of(showAlert({ message: error, resptype: 'fail' })))
                )
            })
        )
    );

    snackBars$ = createEffect(() =>
        this.actions$.pipe(
            ofType(showAlert),
            exhaustMap((action) => {
                return this.ShowSnackBar(action.message,action.resptype).afterDismissed().pipe(
                    map(() => {
                        return emptyAction();
                    })
                );
            })
        )
    );

    ShowSnackBar(message:string,resptype:string = 'fail'){
        let _class = resptype == 'pass' ? 'text-green' : 'text-red';
        return this._matSnackBar.open(message, 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 3000,
            panelClass: _class
        });
    }
}
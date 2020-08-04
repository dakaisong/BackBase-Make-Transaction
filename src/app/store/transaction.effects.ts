import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TransactionsService } from '../services/transactions.service';
import { ITransactionState } from './transaction.state';
import { Store, Action } from '@ngrx/store';
import * as transactionActions from './transaction.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Transcation } from '../model/transcation';
import { of, Observable } from 'rxjs';

@Injectable()
export class TransactionEffects {

    @Effect()
    loadTransactions$: Observable<Action> = this.action$.pipe(
        ofType(transactionActions.ETransactionActions.GetTransactions),
        mergeMap(()=> this.transactionService.getTransactions().pipe(
            map((transactions: Transcation[]) => {
                return new transactionActions.GetTransactionsSuccess(transactions)
            }),
            catchError(error => of(new transactionActions.GetTransactionsError(error)))
        ))
    );

    constructor(private action$: Actions, private transactionService: TransactionsService) {}

}


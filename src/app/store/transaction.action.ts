import { Action } from '@ngrx/store';
import { Transcation } from '../model/transcation';

export enum ETransactionActions {
    GetTransactions = '[API Call] Get Transactions',
    GetTransactionsSuccess = '[Transaction] Get Transactions Success',
    GetTransactionsError = '[Error] Get Transactions Error',
    PostTransaction = '[API Call] Post Transaction',
    PostTransactionSuccess = '[Transaction] Post Transaction Success',
    PostTransactionError = '[Error] Post Transaction Error',
}

export class GetTransactions implements Action {
    public readonly type =  ETransactionActions.GetTransactions;
}

export class GetTransactionsSuccess implements Action {
    public readonly type = ETransactionActions.GetTransactionsSuccess;
    constructor(public  payload: Transcation[]){ }
}

export class GetTransactionsError implements Action {
    public readonly type = ETransactionActions.GetTransactionsError;
    constructor(public payload: any) { }
}

export class PostTransaction implements Action {
    public readonly type = ETransactionActions.PostTransaction;
    constructor(public payload: Transcation){}
}

export class PostTransactionSuccess implements Action {
    public readonly type = ETransactionActions.PostTransactionSuccess;
    constructor(public payload:Transcation){}
}

export class PostTransactionError implements Action {
    public readonly type = ETransactionActions.PostTransactionError;
    constructor(public error:any){}
}


export type TransactionAction = GetTransactions | GetTransactionsSuccess | GetTransactionsError | PostTransaction | PostTransactionSuccess | PostTransactionError;
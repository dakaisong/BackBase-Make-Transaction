import { ITransactionState } from './transaction.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const getTransactionState = createFeatureSelector<ITransactionState>('transactions');

export const gettransactionList = createSelector(getTransactionState, (state:ITransactionState) =>{
    console.log(state.transactions);
    return state.transactions;
})

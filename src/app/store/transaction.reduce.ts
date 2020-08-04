
import { TransactionAction, ETransactionActions } from './transaction.action';
import { initialTransactionState, ITransactionState } from './transaction.state';

export const TransactionReducer = (state = initialTransactionState, action: TransactionAction): ITransactionState =>{
    switch(action.type) {
        case ETransactionActions.GetTransactions: {
            return {
                ...state, isloading: true
            }
        }

        case ETransactionActions.GetTransactionsSuccess: {
            console.log(action.payload);
            return {
                ...state, transactions:action.payload, isloading: false
            }
        }

        case ETransactionActions.GetTransactionsError: {
            return {
                ...state, transactions: null, isloading: false, error: action.payload
            }
        }

        case ETransactionActions.PostTransaction: {
            return {
                ...state,
                isloading: true
            }
        }

        case ETransactionActions.PostTransactionSuccess: {
            console.log(state['transactions']);
            const updatedData = [...state['transactions']];
            updatedData.push(action.payload);
            return {
                ...state,
                transactions: updatedData,
                isloading:false,
            }
        }

        case ETransactionActions.PostTransactionError: {
            return {
                transactions:[],
                isloading:false,
                error:'Something went wrong'
            }
        }

        default:
            return state;
    }
}
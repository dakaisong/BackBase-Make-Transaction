import { Transcation } from '../model/transcation';

export interface ITransactionState {
    transactions: Transcation[];
    isloading: boolean,
    error: any
}

export const initialTransactionState: ITransactionState = {
    transactions: [],
    isloading: false,
    error: null
}
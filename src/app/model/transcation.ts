export interface Transcation {
    amount: number;
    categoryCode: string;
    merchant: string;
    merchantLogo: string;
    transactionDate: number;
    transactionType: string;
}

// export enum TransactionType {
//     onlineTransfer,
//     cardPayment
// }
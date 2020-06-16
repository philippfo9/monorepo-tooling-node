export interface Transaction {
    state: string;
    amount: number;
    currencyId: string;
    lightning: boolean;
}
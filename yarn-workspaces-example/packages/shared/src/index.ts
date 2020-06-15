export interface Transaction {
    state: string;
    amount: number;
    currencyId: string;
    createdAt: Date;
    lightning: boolean;
}
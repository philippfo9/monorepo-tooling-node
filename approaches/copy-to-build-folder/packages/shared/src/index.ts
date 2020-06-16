export interface Transaction {
    state: string;
    amount: number;
    currencyId: string;
    createdAt: Date;
    finishedAt: Date;
    lightning: boolean;
}
import BankAccount from "./BankAccount";

export default class CheckingAccount extends BankAccount {
    constructor() {
        super();
        this.minimumBalance = 50;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): number {
        const errMsg = "Checking account must have minimum balance 50";
        return this._withDraw(amount, errMsg);
    }
}
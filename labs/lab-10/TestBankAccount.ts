import BankAccount from "./BankAccount";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingAcc = new SavingAccount();
let checkingAcc = new CheckingAccount();

savingAcc.deposit(2000);
let balance = savingAcc.withdraw(2000);
console.log("==1=== Saving account balance: ", balance);

checkingAcc.deposit(2000);
balance = checkingAcc.withdraw(2000);
console.log("===2=== Checking account balance: ", balance);



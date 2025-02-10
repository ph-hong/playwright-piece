/**
 * Creating 1 object representing Bank Count Number with below structure:
{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
1. Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts
2. Write a consolse interface app to:
- allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
- allow user to withdraw the money and avoid user to take more than current balance
Note: Strongly recommend to create functions to process each tasks

=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
 */

const readline = require(`readline-sync`);

const accAA = {
    accountName: "Account AA",
    accountNumber: "an0909",
    routingNumber: "rn0909",
    balance: 50000,
}

const accBB = JSON.parse(JSON.stringify(accAA));
accBB.accountName = "Account BB"
accBB.accountNumber = "an1818";
accBB.routingNumber = "rn1818";
accBB.balance = 30000;

const accounts = [accAA, accBB];

// Program interface
bankApp();

// Support functions
function bankApp() {
    let isOpening = true;
    while (isOpening) {
        printAppMenu();
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountNumber) {
                    const { accountName, balance } = foundAccount;
                    console.log(`accountName: ${accountName}, balance: ${balance}`);
                } else {
                    console.log('Account not found!')
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isOpening = false;
                break;
            default:
                console.log('Wrong option \n')
        }
    }
    console.log('See you next time!')
}

// Support functions
function printAppMenu() {
    console.log(
        `
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
`
    )
}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
}

function findAccount() {
    let foundAccount = {};
    const inputAccountNumber = readline.question('Please enter account number: ');
    for (const account of accounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            break;
        }
    }
    // if accound found -> reassign foundAccount for the found one
    return foundAccount;
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMP = 3;
    let attemps = 0;

    do {
        const foundAccount = findAccount();
        const isNotFound = foundAccount.accountNumber == undefined;
        if (isNotFound) {
            console.log(`Attemp time: ${attemps + 1}`)
            attemps++;
        } else {
            // update balance and exit app
            const { balance } = foundAccount;
            console.log(`Your balance is: ${balance}`)
            const expectedWithdrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithdrawMoney > balance) {
                console.log('Insufficient balance')

            } else {
                console.log('Succeed!');
                foundAccount.balance = balance - expectedWithdrawMoney;
                attemps = MAX_ALLOWED_ATTEMP;
            }
        }
    } while (attemps < MAX_ALLOWED_ATTEMP)
}

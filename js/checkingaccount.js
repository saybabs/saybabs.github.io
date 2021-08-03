"use strict";

// class CheckingAccount extends Account{
//     constructor(number, overdraft = 150.00){
//         super(number);
//         this._overdraft = overdraft;
//     };

//     getOverdraft(){
//         return this._overdraft;
//     };

//     setOverdraft(param){
//         this._overdraft = param; 
//     }

//     withdraw(amount) {
//         if(amount < 0){
//             throw new RangeError("Withdrawal ampunt cannot be in negative");
//         }
//         if(this._overdraft > (super._balance - amount)){ 
//             throw new Error("Withdrawal value must not exceed the overdraft limit");
//         }

//         this._balance -= amount;
//         return;
//     }

//     toString(){
//         return "Account " + super.getNumber() + ": balance " + super._balance + ": overdraft limit" + this._overdraft;
//     }

//     endOfMonth() {
//         return super._balance < 0 ? `Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500`
//             : "No action for Checking account";
//     }
// }


class CheckingAccount extends Account {
    /**
     * @param {number} overdraftLimit the overdraftLimit for this account
     * @param {number} number the number for this account
     */
    constructor(overdraftLimit, number) {
        super(number); // the account number
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * @returns {number} the account overdraft limit
     */
    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    /**
     * @param {number} overdraftLimit overdrafit limit for this account
     * @returns {undefined}
     */
    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Method to take money out of the account
     *
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
     withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraftLimit + this._balance) {
            throw Error("Over the draft limit");
        }
        this._balance -= amount;
    }


    /**
     * Performs needed actions at the end of the month
     *
     * @returns {undefined}
     */
     endOfMonth() {
        if(this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._overdraftLimit}`;
        }
        return "";
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit " + this._overdraftLimit;
    }
}
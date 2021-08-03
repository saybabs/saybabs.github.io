
"use strict";

// class SavingsAccount extends Account{

//     constructor(number, interest){
//         super(number);
//         this._interest = interest;
        
//     }

//     getInterest() {
//         return this._interest;
//     };
//     setInterest(param) {
//         this._interest = param;
//     };
//     addInterest() {
//         return this.getBalance() * (this.getInterest()/100);
//     };

//     toString(){
//         return "Account " + super.getNumber() + ": balance " + super._balance + ": interest " + this.addInterest();
//     }

//     endOfMonth() {
//         this.addInterest();
//         return "Interest added Savings Account " + super._number + "balance: " + super._balance + "interest: " + this._interest;
//     }
// }




class SavingsAccount extends Account {
    
    constructor(interest, number) {
        super(number); 
        this._intreset = interest;
    }
    getInterest() {
        return this._intreset;
    }

    setInterest(intreset) {
        this._intreset = intreset;
    }

    addInterest() {
        this.deposit(this.getBalance() * this.getInterest() / 100);
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._intreset}`;
    }

    toString() {
        return "Savings Account " + this.getNumber() + ": balance " + this.getBalance() + ": intreset " + this.getInterest();
    }
}
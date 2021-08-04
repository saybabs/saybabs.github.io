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
   
    constructor(overdraftLimit, number) {
        super(number); // the account number
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

     withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraftLimit + this._balance) {
            throw Error("Over the draft limit");
        }
        this._balance -= amount;
    }

     endOfMonth() {
        if(this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._overdraftLimit}`;
        }
        return "";
    }

    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit " + this._overdraftLimit;
    }
}


// "use strict";

// class Computer{
//     constructor(ram, cpu, storage){
//         this.ram = ram;
//         this.cpu = cpu;
//         this.storage = storage;
//     }

//     runProgram(program){
//         console.log(`running ${program}`);
//     }
// }

// class Laptop extends Computer{
//     constructor(battery, ram, cpu, storage){
//         super(ram, cpu, storage);
//         this._battery = this.battery;
//     }

//     getBattery(){
//         return this._battery;
//     }

//     carryAround(){
//         console.log(`carrying laptop:  cpu: ${this.cpu},  ram: ${this.ram}, storage: ${this.storage}, battery: ${this._battery}`);
//     }
// }

// var laptop = new Laptop("14Hrs", "16GB", "3.2GHz", "512GB SSD");
// laptop.runProgram("Microsoft Word");
// laptop.carryAround();